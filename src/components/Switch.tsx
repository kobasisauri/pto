type Props = {
  active: boolean;
  onClick?: () => void;
};

function Switch({ active = false, onClick }: Props) {
  return (
    <div
      className={`flex items-center h-[14px] w-[22px] border-2 rounded-3xl cursor-pointer ${
        active ? "border-main bg-main" : "border-[#A39CB5]"
      }`}
      onClick={onClick}
    >
      <div
        className={`h-0.5 w-0.5 rounded-full ${
          active ? "bg-white ml-auto" : "bg-[#A39CB5]"
        }`}
      />
    </div>
  );
}

export default Switch;
