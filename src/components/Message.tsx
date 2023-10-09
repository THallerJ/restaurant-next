type MessageProps = {
  children: React.ReactNode;
  pos: string;
};

const Message = ({ children, pos }: MessageProps) => {
  return (
    <div className={`absolute bg-white ${pos}`}>
      <p
        className="rounded-lg border-2 border-primary/50 
        bg-third/20 p-3 text-sm text-black"
      >
        {children}
      </p>
    </div>
  );
};

export default Message;
