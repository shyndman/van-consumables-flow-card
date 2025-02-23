import { LovelaceCardConfig } from "custom-card-helpers";
import { ComboEntity } from "./type.js";

export interface VanConsumablesFlowCardConfig extends LovelaceCardConfig {
  entities: {
    battery?: string | ComboEntity;
    battery_charge?: string;
    grid: string | ComboEntity;
    solar?: string;
    diesel?: string;
    stored_diesel_state?: string;
    water?: string;
    stored_water_state?: string;
  };
  dashboard_link?: string;
  inverted_entities: string | string[];
  kw_decimals: number;
  min_flow_rate: number;
  max_flow_rate: number;
  w_decimals: number;
  watt_threshold: number;
}
