const Joi = require("joi");

const EmployeeValidation = Joi.object().keys({
  RoleID: Joi.optional(),
  PositionID: Joi.optional(),
  DepartmentID: Joi.optional(),
  SalaryID: Joi.optional(),
  FirstName: Joi.string().max(200).required(),
  MiddleName: Joi.string().max(200).required(),
  LastName: Joi.string().max(200).required(),
  Email: Joi.string().max(200).required(),
  Password: Joi.string().max(100).required(),
  Gender: Joi.string().max(100).required(),
  DOB: Joi.date().required(),
  DateOfJoining: Joi.date().required(),
  TerminateDate: Joi.date().optional(),
  Deleted: Joi.optional(),
  Photo: Joi.optional(),
  ContactNo: Joi.string().max(20).required(),
  EmployeeCode: Joi.string().max(100).required(),
  Account: Joi.number().max(3).required()
});

const EmployeeValidationUpdate = Joi.object().keys({
  RoleID: Joi.optional(),
  PositionID: Joi.optional(),
  DepartmentID: Joi.optional(),
  SalaryID: Joi.optional(),
  FirstName: Joi.string().max(200).required(),
  MiddleName: Joi.string().max(200).required(),
  LastName: Joi.string().max(200).required(),
  Email: Joi.string().max(200).required(),
  Gender: Joi.string().max(100).required(),
  DOB: Joi.date().required(),
  DateOfJoining: Joi.date().required(),
  TerminateDate: Joi.date().optional(),
  Deleted: Joi.optional(),
  Photo: Joi.optional(),
  ContactNo: Joi.string().max(20).required(),
  EmployeeCode: Joi.string().max(100).required(),
  Account: Joi.number().max(3).required()
});

const EmployeePersonalInfoValidation = Joi.object().keys({
  BloodGroup: Joi.string().max(10).required(),
  DOB: Joi.date().required(),
  ContactNo: Joi.string().max(20).required(),
  Email: Joi.string().max(200).required(),
  EmergencyContactNo: Joi.string().max(20).required(),
  Gender: Joi.string().max(100).required(),
  Hobbies: Joi.string().max(1000).required(),
  PANcardNo: Joi.string().max(50).required(),
  PermanetAddress: Joi.string().max(200).required(),
  PresentAddress: Joi.string().max(200).required()
});

const SalaryValidation = Joi.object().keys({
  BasicSalary: Joi.string().max(20).required(),
  BankName: Joi.string().max(200).required(),
  AccountNo: Joi.string().max(200).required(),
  AccountHolderName: Joi.string().max(200).required(),
  IFSCcode: Joi.string().max(200).required(),
  TaxDeduction: Joi.string().max(100).required()
});

const EducationValidation = Joi.object().keys({
  SchoolUniversity: Joi.string().max(200).required(),
  Degree: Joi.string().max(200).required(),
  Grade: Joi.string().max(50).required(),
  PassingOfYear: Joi.string().max(10).required()
});

const FamilyInfoValidation = Joi.object().keys({
  Name: Joi.string().max(200).required(),
  Relationship: Joi.string().max(200).required(),
  DOB: Joi.date().required(),
  Occupation: Joi.string().max(100).required()
});

const WorkExperienceValidation = Joi.object().keys({
  CompanyName: Joi.string().max(200).required(),
  Designation: Joi.string().max(200).required(),
  FromDate: Joi.date().required(),
  ToDate: Joi.date().required()
});

const LeaveApplicationValidation = Joi.object().keys({
  Leavetype: Joi.string().max(100).required(),
  FromDate: Joi.date().required(),
  ToDate: Joi.date().required(),
  Reasonforleave: Joi.string().max(100).required(),
  Status: Joi.number().max(1).required()
});

const LeaveApplicationHRValidation = Joi.object().keys({
  Status: Joi.number().max(3).required()
});

const RoleValidation = Joi.object().keys({
  RoleName: Joi.string().max(200).required(),
  CompanyID: Joi.required()
});

const PositionValidation = Joi.object().keys({
  PositionName: Joi.string().max(200).required(),
  CompanyID: Joi.required()
});

const DepartmentValidation = Joi.object().keys({
  DepartmentName: Joi.string().max(200).required(),
  CompanyID: Joi.required()
});

const PortalValidation = Joi.object().keys({
  _id: Joi.optional(),
  ID: Joi.optional(),
  CreatedBy: Joi.optional(),
  CreatedDate: Joi.optional(),
  Deleted: Joi.optional(),
  ModifiedBy: Joi.optional(),
  ModifiedDate: Joi.optional(),
  PortalName: Joi.string().max(200).required(),
  Status: Joi.number().max(1).required()
});

const ProjectValidation = Joi.object().keys({
  _id: Joi.optional(),
  ID: Joi.optional(),
  CreatedBy: Joi.optional(),
  CreatedDate: Joi.optional(),
  Deleted: Joi.optional(),
  EmpFullName: Joi.string().max(200).optional(),
  EstimatedCost: Joi.optional(),
  EstimatedTime: Joi.optional(),
  ModifiedBy: Joi.optional(),
  ModifiedDate: Joi.optional(),
  ProjectDesc: Joi.string().max(2000).optional(),
  ProjectTitle: Joi.string().max(200).required(),
  ProjectURL: Joi.string().max(1000).optional(),
  Remark: Joi.string().max(2000).optional(),
  ResourceID: Joi.optional(),
  Status: Joi.number().max(10).required(),
  portal: Joi.optional(),
  Portal_ID: Joi.optional()
});

const CountryValidation = Joi.object().keys({
  _id: Joi.optional(),
  CountryID: Joi.optional(),
  CountryName: Joi.string().max(200).required()
});

const StateValidation = Joi.object().keys({
  _id: Joi.optional(),
  CountryID: Joi.optional(),
  StateName: Joi.string().max(200).required()
});

const CityValidation = Joi.object().keys({
  _id: Joi.optional(),
  StateID: Joi.optional(),
  CityName: Joi.string().max(200).required()
});

const CompanyValidation = Joi.object().keys({
  _id: Joi.optional(),
  CityID: Joi.optional(),
  CompanyName: Joi.string().max(200).required(),
  Address: Joi.string().max(2000).required(),
  PostalCode: Joi.number().max(999999).required(),
  Website: Joi.string().max(2000).required(),
  Email: Joi.string().max(1000).required(),
  ContactPerson: Joi.string().max(200).required(),
  ContactNo: Joi.string().max(20).required(),
  FaxNo: Joi.string().max(100).required(),
  PanNo: Joi.string().max(200).required(),
  GSTNo: Joi.string().max(200).required(),
  CINNo: Joi.string().max(200).required(),
  Deleted: Joi.optional()
});

module.exports = {
  EmployeeValidation,
  EmployeeValidationUpdate,
  EmployeePersonalInfoValidation,
  SalaryValidation,
  EducationValidation,
  FamilyInfoValidation,
  WorkExperienceValidation,
  LeaveApplicationValidation,
  LeaveApplicationHRValidation,
  RoleValidation,
  PositionValidation,
  DepartmentValidation,
  PortalValidation,
  ProjectValidation,
  CountryValidation,
  StateValidation,
  CityValidation,
  CompanyValidation
};
