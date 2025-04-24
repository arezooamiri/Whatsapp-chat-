export default function ToggleHeader() {
  const button = [
    {
      name: "New group",
    },
    {
      name: "Started Message",
    },
    {
      name: "Select Chats",
    },
    {
      name: "Log Out",
    },
  ];
  return (
    <div className="w-2/4 bg-white shadow-2xl  text-gray-600 flex flex-col gap-2 pt-1 pb-1 absolute  right-2 top-16">
      {button.map((item, index) => (
        <button
          key={index}
          className="text-left text-sm hover:bg-gray-200  p-2 pl-6"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
