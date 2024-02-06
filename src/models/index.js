// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Skill, Technology, Project, Language, Interest, Experience, Education, Contact, ProjectSkill, ProjectTechnology } = initSchema(schema);

export {
  Skill,
  Technology,
  Project,
  Language,
  Interest,
  Experience,
  Education,
  Contact,
  ProjectSkill,
  ProjectTechnology
};