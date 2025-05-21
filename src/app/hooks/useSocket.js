export default function useSocket() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io(
      "https://real-time-notification-service.up.railway.app/sns-listener"
    );

    socket.current.on("connect", () => {
      console.log("Connected");
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  return socket;
}
