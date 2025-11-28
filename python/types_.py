class Pilot:
    def __init__(self):
        self.name = ""
        self.canardos = 0
        self.requests = []
        self.served = False
        self.index = 0
        return

    def add_requested_hardware(self, hardware: str):
        self.requests.append(hardware)

