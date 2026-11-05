import ansalCourtyard from "../../index.php_files/01.png";
import ansalTown from "../../index.php_files/02.png";
import dlfGardenCity from "../../index.php_files/03.png";
import omaxePalmGreens from "../../index.php_files/04.png";
import sportsCity from "../../index.php_files/05.png";
import silverLuneUrbe from "../../index.php_files/silverluneurbe.jpg";
import paradiseCrystal from "../../index.php_files/ParadiseCrystal.jpg";

export type Project = {
  slug: string;
  name: string;
  city: string;
  brand: string;
  image: string;
  description?: string;
};

const descriptions: Record<string, string> = {
  "ansal-town-meerut":
    "Ansal Town is located on the Delhi–Dehradun Highway, near Modipuram Crossing and the Meerut–Dehradun Bypass.",
  "ansals-courtyard-meerut":
    "Strategically located on the Meerut–Modipuram Bypass, Ansals Courtyard is described as a residential complex with world-class infrastructure.",
  "omaxe-palm-greens-greater-noida":
    "Spread over 25 acres in Sector MU, Greater Noida, Palm Greens is described as a residential address with green surroundings, penthouses and shopping centres within the complex.",
  "supertech-meerut-sports-city-meerut":
    "The original project information describes a community combining homes with sports facilities, including a cricket stadium, boating lake and putting greens.",
};

export const projects: Project[] = [
  { slug: "ansals-palm-county-meerut", name: "Ansals Palm County", city: "Meerut", brand: "Ansal", image: ansalCourtyard },
  { slug: "ansal-golf-city-lucknow", name: "Ansal Golf City", city: "Lucknow", brand: "Ansal", image: ansalTown },
  { slug: "ansal-megapolis-greater-noida", name: "Ansal Megapolis", city: "Greater Noida", brand: "Ansal", image: ansalTown },
  { slug: "ansal-shopping-square-lucknow", name: "Ansal Shopping Square", city: "Lucknow", brand: "Ansal", image: ansalTown },
  { slug: "ansal-aquapolis-ghaziabad", name: "Ansal Aquapolis", city: "Ghaziabad", brand: "Ansal", image: ansalTown },
  { slug: "ansal-sushant-city-meerut", name: "Ansal Sushant City", city: "Meerut", brand: "Ansal", image: ansalTown },
  { slug: "ansal-taj-city-agra", name: "Ansal Taj City", city: "Agra", brand: "Ansal", image: ansalTown },
  {
    slug: "ansal-town-meerut",
    name: "Ansal Town",
    city: "Meerut",
    brand: "Ansal",
    image: ansalTown,
    description: descriptions["ansal-town-meerut"],
  },
  { slug: "ansal-town-muzaffarnagar", name: "Ansal Town", city: "Muzaffarnagar", brand: "Ansal", image: ansalTown },
  { slug: "ansal-felix-square-lucknow", name: "Ansal Felix Square", city: "Lucknow", brand: "Ansal", image: ansalTown },
  {
    slug: "ansals-courtyard-meerut",
    name: "Ansals Courtyard",
    city: "Meerut",
    brand: "Ansal",
    image: ansalCourtyard,
    description: descriptions["ansals-courtyard-meerut"],
  },
  { slug: "ansals-orchid-greens-lucknow", name: "Ansals Orchid Greens", city: "Lucknow", brand: "Ansal", image: ansalTown },
  { slug: "dlf-garden-city-lucknow", name: "DLF Garden City", city: "Lucknow", brand: "DLF", image: dlfGardenCity },
  { slug: "era-aspen-garden-meerut", name: "Era Aspen Garden", city: "Meerut", brand: "Era", image: ansalTown },
  { slug: "era-gardenia-estate-meerut", name: "Era Gardenia Estate", city: "Meerut", brand: "Era", image: ansalTown },
  { slug: "nri-city-greater-noida", name: "NRI City", city: "Greater Noida", brand: "Other", image: omaxePalmGreens },
  { slug: "omaxe-naffhil-homes-allahabad", name: "Omaxe Naffhil Homes", city: "Allahabad", brand: "Omaxe", image: omaxePalmGreens },
  { slug: "omaxe-sangam-city-allahabad", name: "Omaxe Sangam City", city: "Allahabad", brand: "Omaxe", image: omaxePalmGreens },
  { slug: "omaxe-square-allahabad", name: "Omaxe Square", city: "Allahabad", brand: "Omaxe", image: omaxePalmGreens },
  { slug: "omaxe-twin-tower-allahabad", name: "Omaxe Twin Tower", city: "Allahabad", brand: "Omaxe", image: omaxePalmGreens },
  { slug: "omaxe-waterfront-allahabad", name: "Omaxe Waterfront", city: "Allahabad", brand: "Omaxe", image: omaxePalmGreens },
  {
    slug: "omaxe-palm-greens-greater-noida",
    name: "Omaxe Palm Greens",
    city: "Greater Noida",
    brand: "Omaxe",
    image: omaxePalmGreens,
    description: descriptions["omaxe-palm-greens-greater-noida"],
  },
  { slug: "orchid-avenues-greater-noida", name: "Orchid Avenues", city: "Greater Noida", brand: "Other", image: omaxePalmGreens },
  { slug: "supertech-green-village-meerut", name: "Supertech Green Village", city: "Meerut", brand: "Supertech", image: sportsCity },
  {
    slug: "supertech-meerut-sports-city-meerut",
    name: "Supertech Sports City",
    city: "Meerut",
    brand: "Supertech",
    image: sportsCity,
    description: descriptions["supertech-meerut-sports-city-meerut"],
  },
];

export const featuredProjects: Project[] = [
  ...projects.filter((project) =>
    [
      "ansals-courtyard-meerut",
      "omaxe-palm-greens-greater-noida",
      "dlf-garden-city-lucknow",
      "supertech-meerut-sports-city-meerut",
    ].includes(project.slug),
  ),
  {
    slug: "silver-lune-urbe-meerut",
    name: "Silver Lune Urbe",
    city: "Meerut",
    brand: "Sunshine",
    image: silverLuneUrbe,
  },
  {
    slug: "paradise-crystal-meerut",
    name: "Paradise Crystal",
    city: "Meerut",
    brand: "Shagun",
    image: paradiseCrystal,
  },
];

export const allProjectPages = [...projects, ...featuredProjects.filter((featured) =>
  !projects.some((project) => project.slug === featured.slug),
)];
