export default interface OCMChargingPoint {
  DataProvider: DataProvider;
  OperatorInfo: OperatorInfo;
  UsageType: UsageType;
  StatusType: StatusType;
  SubmissionStatus: SubmissionStatus;
  UserComments: UserComment[] | null;
  PercentageSimilarity: number | null;
  MediaItems: MediaItem[] | null;
  IsRecentlyVerified: boolean;
  DateLastVerified: string;
  ID: number;
  UUID: string;
  ParentChargePointID: number | null;
  DataProviderID: number;
  DataProvidersReference: string | null;
  OperatorID: number;
  OperatorsReference: string | null;
  UsageTypeID: number;
  UsageCost: string | null;
  AddressInfo: AddressInfo;
  Connections: Connection[];
  NumberOfPoints: number;
  GeneralComments: string | null;
  DatePlanned: string | null;
  DateLastConfirmed: string | null;
  StatusTypeID: number;
  DateLastStatusUpdate: string;
  MetadataValues: null;
  DataQualityLevel: number;
  DateCreated: string;
  SubmissionStatusTypeID: number;
}

// Subtypes

export interface DataProvider {
  WebsiteURL: string;
  Comments: string | null;
  DataProviderStatusType: DataProviderStatusType;
  IsRestrictedEdit: boolean;
  IsOpenDataLicensed: boolean;
  IsApprovedImport: boolean;
  License: string;
  DateLastImported: string | null;
  ID: number;
  Title: string;
}

export interface DataProviderStatusType {
  IsProviderEnabled: boolean;
  ID: number;
  Title: string;
}

export interface OperatorInfo {
  WebsiteURL: string;
  Comments: string | null;
  PhonePrimaryContact: string | null;
  PhoneSecondaryContact: string | null;
  IsPrivateIndividual: boolean;
  AddressInfo: AddressInfo | null;
  BookingURL: string | null;
  ContactEmail: string | null;
  FaultReportEmail: string | null;
  IsRestrictedEdit: boolean;
  ID: number;
  Title: string;
}

export interface UsageType {
  IsPayAtLocation: boolean;
  IsMembershipRequired: boolean;
  IsAccessKeyRequired: boolean;
  ID: number;
  Title: string;
}

export interface StatusType {
  IsOperational: boolean;
  IsUserSelectable: boolean;
  ID: number;
  Title: string;
}

export interface SubmissionStatus {
  IsLive: boolean;
  ID: number;
  Title: string;
}

export interface AddressInfo {
  ID: number;
  Title: string;
  AddressLine1: string;
  AddressLine2: string | null;
  Town: string;
  StateOrProvince: string;
  Postcode: string;
  CountryID: number;
  Country: Country;
  Latitude: number;
  Longitude: number;
  ContactTelephone1: string | null;
  ContactTelephone2: string | null;
  ContactEmail: string | null;
  AccessComments: string | null;
  RelatedURL: string | null;
  Distance: number | null;
  DistanceUnit: number;
}

export interface Country {
  ISOCode: string;
  ContinentCode: string;
  ID: number;
  Title: string;
}

export interface Connection {
  ID: number;
  ConnectionTypeID: number;
  ConnectionType: ConnectionType;
  Reference: string | null;
  StatusTypeID: number;
  StatusType: StatusType;
  LevelID: number;
  Level: Level;
  Amps: number | null;
  Voltage: number | null;
  PowerKW: number;
  CurrentTypeID: number;
  CurrentType: CurrentType;
  Quantity: number;
  Comments: string | null;
}

export interface ConnectionType {
  FormalName: string;
  IsDiscontinued: boolean;
  IsObsolete: boolean;
  ID: number;
  Title: string;
}

export interface Level {
  Comments: string;
  IsFastChargeCapable: boolean;
  ID: number;
  Title: string;
}

export interface CurrentType {
  Description: string;
  ID: number;
  Title: string;
}

export interface UserComment {
  ID: number;
  ChargePointID: number;
  CommentTypeID: number;
  CommentType: {
    ID: number;
    Title: string;
  };
  UserName: string;
  Comment: string;
  Rating: number | null;
  RelatedURL: string | null;
  DateCreated: string;
  UserID: number | null;
  CheckinStatusTypeID: number | null;
  CheckinStatusType?: {
    ID: number;
    Title: string;
    IsPositive: boolean;
  };
}

export interface MediaItem {
  ID: number;
  ChargePointID: number;
  ItemURL: string;
  ItemThumbnailURL: string;
  Comment: string | null;
  IsEnabled: boolean;
  IsVideo: boolean;
  IsFeaturedItem: boolean;
  UserName: string;
  DateCreated: string;
}
