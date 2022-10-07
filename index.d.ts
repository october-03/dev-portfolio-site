type projectDataType = {
  title: string;
  list: listType;
  link?: string;
};

type listType = {
  content: string[];
  techStack: string[];
};

type linkDataType = {
  title: string;
  url: string;
};

type techStackDataType = {
  usable: string[];
  interested: string[];
};

type workExperienceType = {
  companyName: string;
  period: string;
  list?: string[];
};

type educationType = {
  schoolName: string;
  period: string;
  list?: string[];
};

export {
  educationType,
  linkDataType,
  projectDataType,
  techStackDataType,
  workExperienceType,
};
