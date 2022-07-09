import {
  ATIS,
  BeaconLights,
  Flaps,
  FlightPlan,
  FuelQuantity,
  LandingLights,
  MasterSwitch,
  NavLights,
  NoSmoking,
  ParkingBrakes,
  PushbackClearance,
  SeatBelts,
  Spoilers,
  StrobeLights,
  Throttle
} from "./controlSettings.js";
export const BEFORE_START = [
  ParkingBrakes.SET,
  MasterSwitch.ON,
  Throttle.IDLE,
  Spoilers.OFF,
  Flaps.RETRACTED,
  NoSmoking.ON,
  FlightPlan.FILED,
  FuelQuantity.CHECK,
  ATIS.CHECK,
  SeatBelts.ON,
  NavLights.ON,
  BeaconLights.OFF,
  StrobeLights.OFF,
  LandingLights.OFF,
  PushbackClearance.RECEIVED
];
