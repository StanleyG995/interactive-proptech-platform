const BuildingPlan = () => {
  return (
    <div className="building-plan relative w-full">
      <img src="/building.webp" alt="Building Plan" className="w-[80%] m-auto h-auto block" />
 
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
      >
        <path
          d="M1309.232,599.063l-871.216,27.399l0.13,-17.326l21.414,-0.779l0.519,-26.281l35.825,-2.871l-0.3,-27.899l-41.568,-2.805l846.643,-99.249l314.502,78.955l0,71.177l18.455,1.521l-0.406,19.264l-323.997,-21.107Z"
          className="pointer-events-auto cursor-pointer opacity-0 hover:opacity-50 transition-opacity duration-300"
          style={{ fill: '#f0690b' }}
        />
        <path
          d="M1299.763,292.763l-845.617,175.944l-0.101,-13.384l-4.765,-1.529l-0.304,-94.236l49.623,-15.707l-0.507,-10.9l800.445,-272.751l317.536,236.208l-0.892,135.679l-315.417,-139.325Z"
          className="pointer-events-auto cursor-pointer opacity-0 hover:opacity-50 transition-opacity duration-300"
          style={{ fill: '#f0690b' }}
        />
        <path
          d="M1300.682,449.268l-846.434,99.233l-0.086,-17.693l2.788,-0.76l-0.253,-27.122l38.275,-6.337l0.507,-23.447l-41.444,-4.435l846.093,-176.191l315.045,139.555l0.008,95.859l-314.498,-78.662Z"
          className="pointer-events-auto cursor-pointer opacity-0 hover:opacity-50 transition-opacity duration-300"
          style={{ fill: '#f0690b' }}
        />
      </svg>
    </div>
  );
};

export default BuildingPlan;