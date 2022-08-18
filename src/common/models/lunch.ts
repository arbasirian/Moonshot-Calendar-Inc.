export interface LunchModel {
  count: number;
  next: string;
  previous: string;
  results: LaunchSerializerCommonModel[];
}

export interface LaunchSerializerCommonModel {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: LaunchStatusModel;
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string;
  launch_service_provider: AgencySerializerMiniModel;
  rocket: RocketSerializerCommonModel;
  mission: MissionModel;
  pad: PadModel;
  webcast_live: boolean;
  image: string;
  infographic: string;
  program: ProgramModel[];
}

export interface LaunchStatusModel {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}
export interface AgencySerializerMiniModel {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface RocketSerializerCommonModel {
  id: number;
  configuration: LauncherConfigListModel;
}

export interface LauncherConfigListModel {
  id: number;
  url: string;
  name: string;
  family: string;
  full_name: string;
  variant: string;
}

export interface MissionModel {
  id: number;
  name: string;
  description: string;
  launch_designator: string;
  type: string;
  orbit: OrbitModel;
}
export interface OrbitModel {
  id: number;
  name: string;
  abbrev: string;
}

export interface PadModel {
  id: number;
  url: string;
  agency_id: number;
  name: string;
  info_url: string;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: LocationModel;
  map_image: string;
  total_launch_count: number;
}

export interface LocationModel {
  id: number;
  url: string;
  name: string;
  country_code: string;
  map_image: string;
  total_launch_count: number;
  total_landing_count: number;
}

export interface ProgramModel {
  id: number;
  url: string;
  name: string;
  description: string;
  agencies: AgencySerializerMiniModel[];
  image_url: string;
  start_date: string;
  end_date: string;
  info_url: string;
  wiki_url: string;
  mission_patches: [];
}

export interface MissionPatchModel {
  id: number;
  name: string;
  priority: number;
  image_url: string;
  agency: AgencySerializerMiniModel;
}
