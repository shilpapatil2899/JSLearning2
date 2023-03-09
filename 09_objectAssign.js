const professor = {
    name: 'John Doe',
    age: 45,
    field: 'Computer Science',
    yearsOfExperience: 10,
    degrees: {
      engineering: 'CSC',
      PHD: 'Adv Computing'
    },
    certificates: [
      'Hacker Rank Participation',
      'Certificate in IFE course',
      'Certificate in Adv Programming'
    ],
    getTeacherDegrees: function() {
      const degreeValues = Object.values(this.degrees);
      const totalDegrees = degreeValues.length;
      const teacherDegrees = degreeValues.join(', ');
      console.log(`Teacher degrees are ${teacherDegrees}. Total degrees are: ${totalDegrees}`);
      return teacherDegrees;
    }
  };
  
  // Add new property
  professor.totalExperience = "14 years";
  
  // Modify an existing property
  professor.yearsOfExperience = 12;
  
  // Add new certificate
  professor.certificates.push('Oracle Certified');
  
  // Log the last element of the certificates array
  console.log(professor.certificates[professor.certificates.length - 1]);