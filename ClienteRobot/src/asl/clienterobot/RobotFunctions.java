package asl.clienterobot;

public class RobotFunctions 
{	
	SocketRobot socket;
	
	public RobotFunctions() 
	{
		socket = new SocketRobot();
	}
	
	public void move(float acceleration, float rotation)
	{
		socket.send(
				DatagramCommands.MOVE_FORWARD, 
				(byte) Utils.map(acceleration,0,90,255,0), 
				(byte) Utils.map(rotation,-90,90,255,0));
	}
	
	public void stop()
	{
		//! TODO: Deprecate function. Use (implement) sendWithACK instead.
		socket.sendManyTimes(
				DatagramCommands.STOP,
				DatagramCommands.NOPARAM,
				DatagramCommands.NOPARAM,
				10);		
	}
	
	public void beepOn()
	{
		socket.send(
				DatagramCommands.BEEP, 
				DatagramCommands.ON, 
				DatagramCommands.NOPARAM);
	}
	
	public void beepOff()
	{
		socket.send(
				DatagramCommands.BEEP, 
				DatagramCommands.OFF, 
				DatagramCommands.NOPARAM);
	}
}
