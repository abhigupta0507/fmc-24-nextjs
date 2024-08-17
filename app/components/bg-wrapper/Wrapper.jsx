export default function Wrapper({ grid = false, height = "800px", children }) {
  return (
    <div
      className={`flex flex-col justify-center items-center left-0 right-0 w-full ${
        grid ? "bg-grid" : "bg-wrapper mt-[10%] mb-[8%]"
      } pointer-events-none`}
      style={{
        height: grid ? height : "1200px",
        backgroundSize: grid ? "cover" : "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        scale: grid ? "" : "120%",
      }}
    >
      {children}
    </div>
  );
}
