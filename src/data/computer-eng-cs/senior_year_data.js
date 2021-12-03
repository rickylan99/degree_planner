export const senior_year_data = { 
  first_semester : {
      softwareCourses: [
          {
              id: 0,
              classNumber: "CSCE 431",
              className: "Foundations of Software Engineering",
              classHours: 3,
              description: "Application of engineering approach to computer software design and development; life cycle models, software requirements and specification; conceptual model design; detailed design; validation and verification; design quality assurance; software design/development environments and project management.", 
              prerec: "Prerequisite: CSCE 315 or approval of instructor."
          }, 
          {
              id: 1,
              classNumber: "CSCE 451",
              className: "Software Reverse Engineering",
              classHours: 3,
              description: "Overview of the compilation mechanism to generate executable files and raw binary codes from source codes; executable file formats for an operating system to run the binary code; disassembly algorithms and control graph analysis; static and dynamic analyses; case studies on code obfuscation, codebreaking, malware analysis.",
              prerec: "Prerequisites: CSCE 313 or approval of instructor."
          },
      ], 
      dataCourses: [
          {
              id: 0,
              classNumber: "CSCE 305",
              className: "Computational Data Science",
              classHours: 3,
              description: "Computational practice of data science through a sequence of interactive modules that provides an integrated hands-on approach to its methods, tools, applications and supporting technologies including high performance and cloud computing platforms.",
              prerec: "Prerequisites: Grade of C or better in ENGR 102 or prior programming experience; grade of C or better in MATH 251, MATH 253, or STAT 211; junior or senior classification."
          },
          {
              id: 1,
              classNumber: "CSCE 320",
              className: "Principles of Data Science",
              classHours: 3,
              description: "Theoretical foundations, algorithms and methods of deriving valuable insights from data; includes foundations in managing and analyzing data at scale, e.g. big data; data mining techniques and algorithms; exploratory data analysis; statistical methods and models; data visualization.",
              prerec: "Prerequisites: STAT 211 or ECEN 303; STAT 212 or CSCE 222/ECEN 222."
          },
      ]
  },
  second_semester : {
      requiredCourse: [
        {
          id: 0,
          classNumber: "CSCE 483",
          className: "Senior Design",
          classHours: 3,
          description: "Engineering design; working as a design-team member, conceptual design methodology, design evaluations, total project planning and management techniques, design optimization, systems manufacturing costs considerations; emphasis placed upon students' activities as design professionals.", 
          prerec: "Prerequisites: CSCE 315, CSCE 462 and ECEN 325; senior classification."
        }
      ],
      softwareCourses: [
        {
          id: 0,
          classNumber: "CSCE 413",
          className: "Software Security",
          classHours: 3,
          description: "Basic principles of design and implementation of defect-free software, code reviews including tool-assisted review by static and dynamic analysis, risk analysis and management and methods for software security testing.", 
          prerec: "Prerequisite: Grade of C or better in CSCE 315 or approval of instructor."
        }, 
        {
          id: 1,
          classNumber: "CSCE 451",
          className: "Software Reverse Engineering",
          classHours: 3,
          description: "Overview of the compilation mechanism to generate executable files and raw binary codes from source codes; executable file formats for an operating system to run the binary code; disassembly algorithms and control graph analysis; static and dynamic analyses; case studies on code obfuscation, codebreaking, malware analysis.",
          prerec: "Prerequisites: CSCE 313 or approval of instructor."
        },
        {
          id: 2,
          classNumber: "CSCE 431",
          className: "Foundations of Software Engineering",
          classHours: 3,
          description: "Application of engineering approach to computer software design and development; life cycle models, software requirements and specification; conceptual model design; detailed design; validation and verification; design quality assurance; software design/development environments and project management.", 
          prerec: "Prerequisite: CSCE 315 or approval of instructor."
        }, 
      ], 
      dataCourses: [
        {
          id: 0,
          classNumber: "CSCE 420",
          className: "Artificial Intelligence",
          classHours: 3,
          description: "Fundamental concepts and techniques of intelligent systems; representation and interpretation of knowledge on a computer; search strategies and control; active research areas and applications such as notational systems, natural language understanding, vision systems, planning algorithms, intelligent agents and expert systems.",
          prerec: "Prerequisites: CSCE 411 or approval of instructor."
        },
        {
            id: 1,
            classNumber: "CSCE 421",
            className: "Machine Learning",
            classHours: 3,
            description: "Theoretical foundations of machine learning, pattern recognition and generating predictive models and classifiers from data; includes methods for supervised and unsupervised learning (decision trees, linear discriminants, neural networks, Gaussian models, non-parametric models, clustering, dimensionality reduction, deep learning), optimization procedures and statistical inference.",
            prerec: "Prerequisites: Grade of C or better in MATH 304, MATH 311, or MATH 323; grade of C or better in STAT 211; grade of C or better in CSCE 221 or STAT 404."
        },
      ]
  }
}