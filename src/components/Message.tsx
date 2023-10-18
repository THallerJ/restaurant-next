type MessageProps = {
  children: React.ReactNode;
  condition: boolean;
  pos: string;
  full?: boolean;
};

const Message = ({ children, condition, pos, full }: MessageProps) => {
  return condition ? (
    <div className={`absolute bg-white ${full ? "w-full" : null} ${pos}`}>
      <p
        className="rounded-lg border-2 border-primary/50 
        bg-third/20 p-4 text-sm font-semibold text-black"
      >
        {children}
      </p>
    </div>
  ) : null;
};

export default Message;
