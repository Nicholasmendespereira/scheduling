export const formatProcess = (status) => {
  if (!status) return;
  if (status === "progressive") return { label: "Progressiva" };
  if (status === "sealing") return { label: "Selagem" };
  if (status === "cut") return { label: "Corte" };
  if (status === "locks") return { label: "Mechas" };
  if (status === "paint") return { label: "Pintar" };
};
