/**
 * List of programming languages. Each element has:
 * - name
 * - proficiency (optional link to a certification)
 * - logo
 * - link to documentation
 * - link to personal samples
 *
 * @param languages
 * @constructor
 */
// @ts-ignore
export const LanguagesList = ({ languages }) => {
  return (
    <div className="languages-list">
      {
        // @ts-ignore
        languages.map((language) => (
          <span key={language.id} className="language">
            {language.name}
          </span>
        ))
      }
    </div>
  );
};

const MOCK_LANGUAGES = [
  {
    id: 0,
    name: "Python",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 1,
    name: "JavaScript",
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 2,
    name: "TypeScript",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 3,
    name: "Java",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 4,
    name: "C#",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 5,
    name: "C++",
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 6,
    name: "C",
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 7,
    name: "SQL",
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 8,
    name: "GraphQL",
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 9,
    name: "HTML",
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 10,
    name: "CSS",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 11,
    name: "Go",
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 12,
    name: "PHP",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 13,
    name: "Ruby",
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 14,
    name: "Rust",
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 15,
    name: "Swift",
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 16,
    name: "Kotlin",
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 17,
    name: "Objective-C",
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 18,
    name: "R",
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 19,
    name: "Scala",
    proficiency: 1, // out of 5 - 'novice'
  },
];
