type MessageProps = {
  children: React.ReactNode;
  condition: boolean;
  pos: string;
};

const Message = ({ children, condition, pos }: MessageProps) => {
  return condition ? (
    <div className={`absolute bg-white ${pos}`}>
      <p
        className="rounded-lg border-2 border-primary/50 
        bg-third/20 p-3 text-sm text-black"
      >
        {children}
      </p>
    </div>
  ) : null;
};

export default Message;
