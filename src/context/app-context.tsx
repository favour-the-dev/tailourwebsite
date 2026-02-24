import { createContext, useContext, useState } from "react";

export interface appContextProps {
  sample_series_id: number | null;
  setSampleSeriesId: (id: number | null) => void;
  sample_series_name: string | null;
  setSampleSeriesName: (name: string | null) => void;
  material_id: number | null;
  setMaterialId: (id: number | null) => void;
}

export const appContext = createContext<appContextProps | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sample_series_id, setSampleSeriesId] = useState<number | null>(null);
  const [sample_series_name, setSampleSeriesName] = useState<string | null>(
    null,
  );
  const [material_id, setMaterialId] = useState<number | null>(null);
  return (
    <appContext.Provider
      value={{
        sample_series_id,
        setSampleSeriesId,
        sample_series_name,
        setSampleSeriesName,
        material_id,
        setMaterialId,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
