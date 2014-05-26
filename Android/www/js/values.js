

SERVER_IP= "192.168.0.123"
SERVER_CAM_PORT = 8080;
SERVER_CMD_PORT  = 8000;
WEBHOST = "ws://" + SERVER_IP + ":" + SERVER_CMD_PORT;

ACCELEROMETER_FREQUENCY = 40;

SLOW_SPEED = 130;
MEDIUM_SPEED = 190;
FAST_SPEED = 255;

//COMMANDS

CMD_ON = 1;
CMD_OFF = 0;
CMD_NOPARAM = 0;

CMD_STOP = 0;
CMD_MOVE_FORWARD = 1;
CMD_SET_LEFT = 2;
CMD_SET_RIGHT = 3;
CMD_BOTH_MOTORS = 4;
CMD_LEFT_MOTOR = 5;
CMD_RIGHT_MOTOR = 6;
CMD_MOVE_BACKWARD = 7;
CMD_BACK_BOTH= 8;
CMD_BACK_LEFT= 9;
CMD_BACK_RIGHT= 10;
CMD_BEEP = 11;
CMD_LED = 12;
CMD_SENSORS = 13;
CMD_FRONT = 14;
CMD_MIDDLE = 15;
CMD_FRONT_ANALOG= 16;
CMD_SERVO = 17;

PYT_SEND = "sendToArduino";
PYT_RECEIVE = "receiveFromArduino";
PYT_CAM= "takePic";
PYT_SONAR = "readSonar";
PYT_SERVO = "moveServo";
PYT_MAP = "map";
