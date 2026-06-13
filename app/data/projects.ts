export type ProjectImage = {
  default: string;
  hover?: string;
  process?: boolean;
  placement?: "fabrication" | "shapeChange";
  caption?: string;
  fullWidth?: boolean;
};

export type Project = {
  title: string;
  description: string;
  parameters: {
    design: string[];
    fabrication: string[];
    evaluation: string[];
  };
  images: ProjectImage[];
};

export const projects: Record<string, Project> = {
  mono: {
    title: "MONTY",

    description: "multi-step monoclastic deformation",

    parameters: {
      design: [
        "ACTIVE GEOMETRY",
        "cell size | 10mm",
        "sectional geometries | 1.5 period HV",
        "wall thickness | 0.5 mm",
        "RESTRICTIVE GEOMETRY",
        "pattern | V wave",
        "no. layers | 4",
      ],

      fabrication: [
        "PRINTING",
        "nozzle temperature | 200C",
        "layer height, width | 0.3mm, 0.8 mm",
        "printing method | multi-step",
        "ACTUATION",
        "submergence | 2 hours",
      ],

      evaluation: [
        "geometry | monoclastic",
        "printed mass | 85g",
        "bending radius | 56 mm",
        "bending curvature | 0.018 mm-1",
      ],
    },

    images: [
      {
        default: "/images/mono/P3_mono.JPG",
        process: true,
      },
      {
        default: "/images/mono/P4_mono.JPG",
        process: true,
      },
      {
        default: "/images/mono/P1_mono.JPG",
        hover: "/images/mono/P2_mono.JPG",
      },
      {
        default: "/images/mono/mono-model.gif",
      },
      {
        default: "/images/mono/P45_mono.JPG",
        hover: "/images/mono/A45_mono.JPG",
      },
      {
        default: "/images/mono/P0_mono.JPG",
        hover: "/images/mono/A0_mono.JPG",
      },
      {
        default: "/images/mono/shapingloading.gif",
        placement: "shapeChange",
        fullWidth: true,
      },
    ],
  },
  syn_susan: {
    title: "SUSAN",

    description: "multi-step synclastic deformation",

    parameters: {
      design: [
        "ACTIVE GEOMETRY",
        "cell size | gradient from 10mm",
        "sectional geometries | 1 period VV (active) + HH (compliant)",
        "wall thickness | gradient from 0.5 mm",
        "RESTRICTIVE GEOMETRY",
        "pattern | mirrored edge + compliant regions",
        "no. layers | side a: 8x1 - 4x6- 8x1, side b: 8,2,1x1- 0x2- 8,2,1x1  ",
      ],

      fabrication: [
        "PRINTING",
        "nozzle temperature | 200C",
        "layer height, width | 0.3mm, 0.8 mm",
        "printing method | multi-step",
        "ACTUATION",
        "submergence | 3 hours",
      ],

      evaluation: [
        "geometry | synclastic",
        "printed mass | 130 g",
        "bending radius | 25 mm",
        "bending curvature | 0.04 mm-1",
      ],
    },

    images: [
      {
        default: "/images/susan/P3_susan.JPG",
        process: true,
      },
      {
        default: "/images/susan/P4_susan.JPG",
        process: true,
      },
      {
        default: "/images/susan/P1_susan.JPG",
        hover: "/images/susan/P2_susan.jpg",
      },
      {
        default: "/images/susan/syn_susan.gif",
      },
      {
        default: "/images/susan/P45_susan.JPG",
        hover: "/images/susan/A45_susan.JPG",
      },
      {
        default: "/images/susan/P0_susan.JPG",
        hover: "/images/susan/A0_susan.JPG",
      },
      { 
        default: "/images/susan/P45_2susan.JPG" ,
        hover: "/images/susan/A45_2susan.JPG" },
      {
        default: "/images/susan/susan_studies.jpg",
      },
    ],
  },
  anti_andy: {
    title: "ANDY",

    description: "multi-step anticlastic deformation",

    parameters: {
      design: [
        "ACTIVE GEOMETRY",
        "cell size | gradient from 10mm",
        "sectional geometries | VV (active) + HH (complaint)",
        "wall thickness | gradient from 0.5 mm",
        "RESTRICTIVE GEOMETRY",
        "pattern | mirrored active edge + compliant",
        "no. layers | side a: 4x3 - 0x2, side b: 0x2- 4x3 ",
      ],

      fabrication: [
        "PRINTING",
        "nozzle temperature | 200C",
        "layer height, width | 0.3mm, 0.8 mm",
        "printing method | multi-step",
        "ACTUATION",
        "submergence | 3 hours",
      ],

      evaluation: [
        "geometry | anticlastic",
        "printed mass | 108g",
        "bending radius | -125mm, +100 mm-1",
        "bending curvature | -0.008 mm-1, +0.01 mm-1",
      ],
    },

    images: [
      {
        default: "/images/andy/P3_andy.JPG",
        process: true,
      },
      {
        default: "/images/andy/P4_andy.JPG",
        process: true,
      },
      {
        default: "/images/andy/P1_andy.JPG",
        hover: "/images/andy/P2_andy.JPG",
      },
            {
        default: "/images/andy/anti_andy.gif",
      },
      {
        default: "/images/andy/P45_andy.JPG",
        hover: "/images/andy/A45_andy.JPG",
      },
      {
        default: "/images/andy/v1.jpg",
      },
      {
        default: "/images/andy/v2.jpg",
      },
    ],
  },
  syn_cindy: {
    title: "CINDY",

    description: "multi-step synclastic deformation",

    parameters: {
      design: [
        "ACTIVE GEOMETRY",
        "cell size | gradient from 10mm",
        "sectional geometries | 1 period VV (active) + HH (compliant)",
        "wall thickness | gradient from 0.5 mm",
        "RESTRICTIVE GEOMETRY",
        "pattern | alternating active (edge + middle) + compliant regions",
        "no. layers | side a: 4x3- 0x4- 4x3, side b: 4x10 ",
      ],

      fabrication: [
        "PRINTING",
        "nozzle temperature | 200C",
        "layer height, width | 0.3mm, 0.8 mm",
        "printing method | multi-step",
        "ACTUATION",
        "submergence | 3 hours",
      ],

      evaluation: [
        "geometry | synclastic",
        "printed mass | 130 g",
        "bending radius | 125 mm",
        "bending curvature | 0.008 mm-1",
      ],
    },

    images: [
      {
        default: "/images/cindy/P3_cindy.JPG",
        process: true,
      },
      {
        default: "/images/cindy/P4_cindy.JPG",
        process: true,
      },
      {
        default: "/images/cindy/P1_cindy.JPG",
        hover: "/images/cindy/P2_cindy.JPG",
      },
      {
        default: "/images/cindy/syn_cindy.gif",
      },
      {
        default: "/images/cindy/P45_cindy.JPG",
        hover: "/images/cindy/A45_cindy.JPG",
      },
      {
        default: "/images/cindy/andrewcindy_studies.jpg",
      },
    ],
  },
  anti_andrew: {
    title: "ANDREW",

    description: "multi-step anticlastic deformation",

    parameters: {
      design: [
        "ACTIVE GEOMETRY",
        "cell size | gradient from 10mm",
        "sectional geometries | 1 period VV (active) + HH (compliant)",
        "wall thickness | gradient from 0.5 mm",
        "RESTRICTIVE GEOMETRY",
        "pattern | single faced active (edge) + double faced (compliant+middle) regions",
        "no. layers | side a: 4x8, side b: 0x2 - 4x4 - 0x2  ",
      ],

      fabrication: [
        "PRINTING",
        "nozzle temperature | 200C",
        "layer height, width | 0.3mm, 0.8 mm",
        "printing method | multi-step",
        "ACTUATION",
        "submergence | 3 hours",
      ],

      evaluation: [
        "geometry | anticlastic",
        "printed mass | 97 g",
        "bending radius | -68mm, +351mm",
        "bending curvature | -0.015 mm-1. +0.003 mm-1",
      ],
    },

    images: [
      {
        default: "/images/andrew/P3_andrew.JPG",
        process: true,
      },
      {
        default: "/images/andrew/P4_andrew.JPG",
        process: true,
      },
      {
        default: "/images/andrew/P1_andrew.JPG",
        hover: "/images/andrew/P2_andrew.JPG",
      },
      {
        default: "/images/andrew/anti_andrew.gif",
      },
      {
        default: "/images/andrew/P45_andrew.JPG",
        hover: "/images/andrew/A45_andrew.JPG",
      },
      { 
        default: "/images/andrew/P0_andrew.JPG" ,
        hover: "/images/andrew/A0_andrew.JPG" 
      },
      {
        default: "/images/andrew/smallandrew.JPG",
        caption: "100x200mm",
      },
      {
        default: "/images/andrew/bigandrew.JPG",
        caption: "200x200mm",
      },
    ],
  },
  syn_cinthia: {
    title: "CINTHIA",

    description: "multi-step synclastic deformation",

    parameters: {
      design: [
        "ACTIVE GEOMETRY",
        "cell size | R: 5mm, A: 10mm",
        "sectional geometries | R: 1/2 period HV, A: 1 period NH",
        "regional aspect ratio | 1:3",
        "RESTRICTIVE GEOMETRY",
        "pattern | active edges on restrictive geometry (8 lines x 2), 40% coverage",
        "no. layers | 4x8 - 0x24 - 4x8  ",
      ],

      fabrication: [
        "PRINTING",
        "nozzle temperature | 200C",
        "layer height, width | 0.2mm, 0.62 mm",
        "printing method | cross sectional + multi-step",
        "ACTUATION",
        "submergence | 2 hours",
      ],

      evaluation: [
        "geometry | synclastic",
        "printed mass | 130 g",
        "bending radius | +242mm, +138mm",
        "bending curvature | +0.004 mm-1. +0.007 mm-1",
      ],
    },

    images: [
      {
        default: "/images/cinthia/P3_cinthia.jpg",
        process: true,
      },
      {
        default: "/images/cinthia/P4_cinthia.jpg",
        process: true,
      },
      {
        default: "/images/cinthia/P1_cinthia.jpg",
        hover: "/images/cinthia/P2_cinthia.jpg",
      },
      {
        default: "/images/cinthia/P45_cinthia.jpg",
        hover: "/images/cinthia/A45_cinthia.jpg",
      },
      {
        default: "/images/cinthia/syn_cinthia.gif",
        placement: "fabrication",
      },
      {
        default: "/images/cinthia/P0_cinthia.jpg",
        hover: "/images/cinthia/A0_cinthia.jpg",
      },
      { 
        default: "/images/cinthia/P45_2cinthia.jpg" ,
        hover: "/images/cinthia/A45_2cinthia.jpg" },
      {
        default: "/images/cinthia/cinthia_studies.jpg",
      },
            {
        default: "/images/cinthia/cs_studies.jpg",
      },
    ],
  },
};
