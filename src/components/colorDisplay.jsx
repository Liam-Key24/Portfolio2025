export default function ColorDisplay({ colors }) {

  if (!colors || !Array.isArray(colors)) {
    return 
  }

  return (
    <div className="flex w-auto space-x-1 justify-evenly">
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-10 w-10 md:h-20 md:w-20 xl:h-40 xl:w-40 rounded-[100%]"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );

}

