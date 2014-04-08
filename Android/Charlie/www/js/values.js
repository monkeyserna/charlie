/**
 * Created by monkey on 10/03/14.
 */

SERVER_TCP_PORT = 4999;
SERVER_UDP_PORT = 5000;
WEBSERVER_PORT = 8000;
SERVER_CAM_PORT = 8080;
SERVER_IP = window.location.hostname //"192.168.0.123"; //"192.168.173.1" // "10.0.2.2"

WEBHOST = "ws://" + SERVER_IP + ":" + WEBSERVER_PORT;

ACCELEROMETER_FREQUENCY = 40;

//COMMANDS

CMD_ON = 1;
CMD_OFF = 0;
CMD_NOPARAM = 0;

CMD_STOP = 0;
CMD_MOVE_FORWARD = 1;
CMD_MOVE_BACKWARD = 2;
CMD_BEEP = 3;
CMD_LED = 4;
CMD_LEFT_MOTOR = 5;
CMD_RIGHT_MOTOR = 6;
CMD_BOTH_MOTORS = 7;
CMD_INFRA = 8;
CMD_SONAR = 9;
CMD_SENSORS = 10;

PYT_SEND = "self.sendToArduino"
PYT_RECEIVE = "self.receiveFromArduino"
