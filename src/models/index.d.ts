import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly proficiency?: number | null;
  readonly icon?: string | null;
  readonly projects?: (ProjectSkill | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly proficiency?: number | null;
  readonly icon?: string | null;
  readonly projects: AsyncCollection<ProjectSkill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skill = LazyLoading extends LazyLoadingDisabled ? EagerSkill : LazySkill

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}

type EagerTechnology = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Technology, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly proficiency?: number | null;
  readonly icon?: string | null;
  readonly projects?: (ProjectTechnology | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTechnology = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Technology, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly proficiency?: number | null;
  readonly icon?: string | null;
  readonly projects: AsyncCollection<ProjectTechnology>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Technology = LazyLoading extends LazyLoadingDisabled ? EagerTechnology : LazyTechnology

export declare const Technology: (new (init: ModelInit<Technology>) => Technology) & {
  copyOf(source: Technology, mutator: (draft: MutableModel<Technology>) => MutableModel<Technology> | void): Technology;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly link?: string | null;
  readonly Technologies?: (ProjectTechnology | null)[] | null;
  readonly Skills?: (ProjectSkill | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly link?: string | null;
  readonly Technologies: AsyncCollection<ProjectTechnology>;
  readonly Skills: AsyncCollection<ProjectSkill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerLanguage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Language, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly proficiency?: number | null;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLanguage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Language, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly proficiency?: number | null;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Language = LazyLoading extends LazyLoadingDisabled ? EagerLanguage : LazyLanguage

export declare const Language: (new (init: ModelInit<Language>) => Language) & {
  copyOf(source: Language, mutator: (draft: MutableModel<Language>) => MutableModel<Language> | void): Language;
}

type EagerInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Interest = LazyLoading extends LazyLoadingDisabled ? EagerInterest : LazyInterest

export declare const Interest: (new (init: ModelInit<Interest>) => Interest) & {
  copyOf(source: Interest, mutator: (draft: MutableModel<Interest>) => MutableModel<Interest> | void): Interest;
}

type EagerExperience = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Experience, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly date?: string | null;
  readonly logo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExperience = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Experience, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly date?: string | null;
  readonly logo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Experience = LazyLoading extends LazyLoadingDisabled ? EagerExperience : LazyExperience

export declare const Experience: (new (init: ModelInit<Experience>) => Experience) & {
  copyOf(source: Experience, mutator: (draft: MutableModel<Experience>) => MutableModel<Experience> | void): Experience;
}

type EagerEducation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Education, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEducation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Education, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Education = LazyLoading extends LazyLoadingDisabled ? EagerEducation : LazyEducation

export declare const Education: (new (init: ModelInit<Education>) => Education) & {
  copyOf(source: Education, mutator: (draft: MutableModel<Education>) => MutableModel<Education> | void): Education;
}

type EagerContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly bio?: string | null;
  readonly linkedIn?: string | null;
  readonly github?: string | null;
  readonly facebook?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly bio?: string | null;
  readonly linkedIn?: string | null;
  readonly github?: string | null;
  readonly facebook?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact) & {
  copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

type EagerProjectSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectSkill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly skillId?: string | null;
  readonly projectId?: string | null;
  readonly skill: Skill;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectSkill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly skillId?: string | null;
  readonly projectId?: string | null;
  readonly skill: AsyncItem<Skill>;
  readonly project: AsyncItem<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectSkill = LazyLoading extends LazyLoadingDisabled ? EagerProjectSkill : LazyProjectSkill

export declare const ProjectSkill: (new (init: ModelInit<ProjectSkill>) => ProjectSkill) & {
  copyOf(source: ProjectSkill, mutator: (draft: MutableModel<ProjectSkill>) => MutableModel<ProjectSkill> | void): ProjectSkill;
}

type EagerProjectTechnology = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectTechnology, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly technologyId?: string | null;
  readonly projectId?: string | null;
  readonly technology: Technology;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectTechnology = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectTechnology, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly technologyId?: string | null;
  readonly projectId?: string | null;
  readonly technology: AsyncItem<Technology>;
  readonly project: AsyncItem<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectTechnology = LazyLoading extends LazyLoadingDisabled ? EagerProjectTechnology : LazyProjectTechnology

export declare const ProjectTechnology: (new (init: ModelInit<ProjectTechnology>) => ProjectTechnology) & {
  copyOf(source: ProjectTechnology, mutator: (draft: MutableModel<ProjectTechnology>) => MutableModel<ProjectTechnology> | void): ProjectTechnology;
}