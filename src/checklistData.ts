import {
  APU,
  ATIS,
  AutoBrakes,
  AutoPilot,
  BeaconLights,
  CruiseSpeed,
  Engines,
  Flaps,
  FlightPlan,
  FuelQuantity,
  LandingGear,
  LandingLights,
  MasterSwitch,
  NavLights,
  NoSmoking,
  ParkingBrakes,
  PushbackClearance,
  SeatBelts,
  Spoilers,
  StrobeLights,
  TakeoffClearance,
  TaxiClearance,
  Throttle,
  Trim,
  Weather,
} from "./controlSettings";

export const BEFORE_START = [
  ParkingBrakes.SET,
  MasterSwitch.ON,
  APU.START,
  APU.ON,
  NoSmoking.ON,
  SeatBelts.OFF,
  FlightPlan.FILED,
  FuelQuantity.CHECK,
  ATIS.CHECK,
  NavLights.ON,
  BeaconLights.OFF,
  StrobeLights.OFF,
  LandingLights.OFF,
  Spoilers.RETRACTED,
  Flaps.RETRACTED,
];

export const BEFORE_PUSHBACK = [
  PushbackClearance.RECEIVED,
  BeaconLights.ON,
  SeatBelts.ON,
];

export const BEFORE_TAXI = [
  Engines.START,
  Throttle.IDLE,
  TaxiClearance.RECEIVED,
];

export const BEFORE_TAKEOFF = [
  ParkingBrakes.SET,
  Throttle.IDLE,
  Flaps.TAKEOFF,
  Trim.TAKEOFF,
  AutoBrakes.MAX,
  TakeoffClearance.RECEIVED,
  StrobeLights.ON,
  LandingLights.ON,
];

export const CLIMB = [
  LandingGear.UP,
  Flaps.RETRACTED,
  AutoPilot.ENGAGED,
  LandingLights.OFF10K,
  SeatBelts.OFF,
  AutoBrakes.OFF,
];

export const CRUISE = [CruiseSpeed.SET, FuelQuantity.CHECK];

export const APPROACH = [
  ATIS.CHECK,
  Weather.CHECK,
  SeatBelts.ON,
  LandingLights.ON10K,
  Spoilers.ARMED,
  AutoBrakes.MED,
  Trim.LANDING,
  Flaps.LANDING,
  LandingGear.DOWN,
];

export const AFTER_LANDING = [
  StrobeLights.OFF,
  LandingLights.OFF,
  Spoilers.RETRACTED,
  Flaps.RETRACTED,
  Trim.ZERO,
];

export const PARKING = [
  ParkingBrakes.SET,
  Throttle.IDLE,
  APU.START,
  APU.ON,
  Engines.OFF,
  SeatBelts.OFF,
  BeaconLights.OFF,
  AutoBrakes.OFF,
];
