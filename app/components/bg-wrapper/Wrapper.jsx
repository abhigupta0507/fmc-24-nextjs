export default function Wrapper({ grid = false, height = "90vh", children }) {
  return (
    <div
      className={`flex flex-col justify-center items-center left-0 right-0 w-[100vw] ${
        grid ? "bg-grid" : "bg-wrapper mt-[10%] mb-[8%]"
      } pointer-events-none`}
      style={{
        height: grid ? height : "94vh",
        backgroundSize: grid ? "cover" : "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        scale: grid ? "" : "220%",
      }}
    >
      {children}
    </div>
  );
}
