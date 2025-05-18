import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TestsSection from './components/sections/TestsSection';
import ResultsSection from './components/sections/ResultsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ProfileSection from './components/sections/ProfileSection';
import AboutSection from './components/sections/AboutSection';
import TestInterface from './components/sections/TestInterface';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import BranchSelection from './components/sections/BranchSelection';
import Payment from './components/sections/payment';  // Import Payment component
import { TestResult } from './types/questions';
import { Branch } from './types/branch';
import { onAuthChange } from './firebase/auth';
import { saveTestResult, getTestResults } from './firebase/results';
import { User } from 'firebase/auth';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [activeTest, setActiveTest] = useState<{
    subject: string;
    duration: string;
    questions: number;
  } | null>(null);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [loading, setLoading] = useState(true);

  // Payment state: false by default or from localStorage
  const [isPaid, setIsPaid] = useState<boolean>(() => {
    return localStorage.getItem('isPaid') === 'true';
  });

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      loadTestResults();
    }
  }, [user]);

  const loadTestResults = async () => {
    if (user) {
      try {
        const results = await getTestResults(user.uid);
        setTestResults(results);
      } catch (error) {
        console.error('Error loading test results:', error);
      }
    }
  };

  const handleTestComplete = async (result: TestResult) => {
    if (user) {
      try {
        await saveTestResult(user.uid, result);
        await loadTestResults();
        setActiveTest(null);
        setCurrentSection('results');
      } catch (error) {
        console.error('Error saving test result:', error);
      }
    }
  };

  const handleSignIn = (user: User) => {
    setUser(user);
    setCurrentSection('branch-selection');
  };

  const handleSignUp = (user: User) => {
    setUser(user);
    setCurrentSection('branch-selection');
  };

  const handleBranchSelect = (branch: Branch) => {
    setSelectedBranch(branch);
    setCurrentSection('home');
  };

  const handleSignOut = () => {
    setUser(null);
    setSelectedBranch(null);
    setCurrentSection('home');
    setTestResults([]);
    setIsPaid(false);
    localStorage.removeItem('isPaid');
  };

  // Navigate to payment section when user clicks Pay Now
  const handlePayNow = () => {
    setCurrentSection('payment');
  };

  // Called after successful payment
  const handlePaymentSuccess = () => {
    setIsPaid(true);
    localStorage.setItem('isPaid', 'true');
    alert('Payment successful! Tests are now unlocked.');
    setCurrentSection('tests');
  };

  // Cancel payment, return to tests page
  const handlePaymentCancel = () => {
    setCurrentSection('tests');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    if (showSignUp) {
      return (
        <SignUpPage
          onSignUp={handleSignUp}
          onSwitchToSignIn={() => setShowSignUp(false)}
        />
      );
    }
    return (
      <SignInPage
        onSignIn={handleSignIn}
        onSwitchToSignUp={() => setShowSignUp(true)}
      />
    );
  }

  if (!selectedBranch && currentSection === 'branch-selection') {
    return <BranchSelection onSelectBranch={handleBranchSelect} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onNavigate={setCurrentSection} 
        currentSection={currentSection}
        onSignOut={handleSignOut}
        selectedBranch={selectedBranch}
        onChangeBranch={() => setCurrentSection('branch-selection')}
      />
      <main>
        {activeTest ? (
          <TestInterface
            subject={activeTest.subject}
            duration={activeTest.duration}
            totalQuestions={activeTest.questions}
            branch={selectedBranch!}
            onClose={() => setActiveTest(null)}
            onComplete={handleTestComplete}
          />
        ) : (
          (() => {
            switch (currentSection) {
              case 'home':
                return <HeroSection />;
              case 'tests':
                return (
                  <TestsSection
                    onStartTest={setActiveTest}
                    selectedBranch={selectedBranch!}
                    isPaid={isPaid}
                    onPayNow={handlePayNow}
                  />
                );
              case 'results':
                return <ResultsSection results={testResults} />;
              case 'achievements':
                return <AchievementsSection />;
              case 'profile':
                return <ProfileSection />;
              case 'about':
                return <AboutSection />;
              case 'payment':
                return (
                  <Payment
                    onSuccess={handlePaymentSuccess}
                    onCancel={handlePaymentCancel}
                  />
                );
              default:
                return <HeroSection />;
            }
          })()
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;





// import React, { useState, useEffect } from 'react';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import HeroSection from './components/sections/HeroSection';
// import TestsSection from './components/sections/TestsSection';
// import ResultsSection from './components/sections/ResultsSection';
// import AchievementsSection from './components/sections/AchievementsSection';
// import ProfileSection from './components/sections/ProfileSection';
// import AboutSection from './components/sections/AboutSection';
// import TestInterface from './components/sections/TestInterface';
// import SignInPage from './components/auth/SignInPage';
// import SignUpPage from './components/auth/SignUpPage';
// import BranchSelection from './components/sections/BranchSelection';
// import Payment from './components/sections/payment';  // <-- Import Payment component here
// import { TestResult } from './types/questions';
// import { Branch } from './types/branch';
// import { onAuthChange } from './firebase/auth';
// import { saveTestResult, getTestResults } from './firebase/results';
// import { User } from 'firebase/auth';

// function App() {
//   const [currentSection, setCurrentSection] = useState('home');
//   const [activeTest, setActiveTest] = useState<{
//     subject: string;
//     duration: string;
//     questions: number;
//   } | null>(null);
//   const [testResults, setTestResults] = useState<TestResult[]>([]);
//   const [user, setUser] = useState<User | null>(null);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthChange((user) => {
//       setUser(user);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (user) {
//       loadTestResults();
//     }
//   }, [user]);

//   const loadTestResults = async () => {
//     if (user) {
//       try {
//         const results = await getTestResults(user.uid);
//         setTestResults(results);
//       } catch (error) {
//         console.error('Error loading test results:', error);
//       }
//     }
//   };

//   const handleTestComplete = async (result: TestResult) => {
//     if (user) {
//       try {
//         await saveTestResult(user.uid, result);
//         await loadTestResults();
//         setActiveTest(null);
//         setCurrentSection('results');
//       } catch (error) {
//         console.error('Error saving test result:', error);
//       }
//     }
//   };

//   const handleSignIn = (user: User) => {
//     setUser(user);
//     setCurrentSection('branch-selection');
//   };

//   const handleSignUp = (user: User) => {
//     setUser(user);
//     setCurrentSection('branch-selection');
//   };

//   const handleBranchSelect = (branch: Branch) => {
//     setSelectedBranch(branch);
//     setCurrentSection('home');
//   };

//   const handleSignOut = () => {
//     setUser(null);
//     setSelectedBranch(null);
//     setCurrentSection('home');
//     setTestResults([]);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (!user) {
//     if (showSignUp) {
//       return (
//         <SignUpPage
//           onSignUp={handleSignUp}
//           onSwitchToSignIn={() => setShowSignUp(false)}
//         />
//       );
//     }
//     return (
//       <SignInPage
//         onSignIn={handleSignIn}
//         onSwitchToSignUp={() => setShowSignUp(true)}
//       />
//     );
//   }

//   if (!selectedBranch && currentSection === 'branch-selection') {
//     return <BranchSelection onSelectBranch={handleBranchSelect} />;
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar 
//         onNavigate={setCurrentSection} 
//         currentSection={currentSection}
//         onSignOut={handleSignOut}
//         selectedBranch={selectedBranch}
//         onChangeBranch={() => setCurrentSection('branch-selection')}
//       />
//       <main>
//         {activeTest ? (
//           <TestInterface
//             subject={activeTest.subject}
//             duration={activeTest.duration}
//             totalQuestions={activeTest.questions}
//             branch={selectedBranch!}
//             onClose={() => setActiveTest(null)}
//             onComplete={handleTestComplete}
//           />
//         ) : (
//           (() => {
//             switch (currentSection) {
//               case 'home':
//                 return <HeroSection />;
//               case 'tests':
//                 return <TestsSection onStartTest={setActiveTest} selectedBranch={selectedBranch!} />;
//               case 'results':
//                 return <ResultsSection results={testResults} />;
//               case 'achievements':
                
//                 return <AchievementsSection />;
//               case 'profile':
//                 return <ProfileSection />;
//               case 'about':
//                 return <AboutSection />;
//               case 'payment':      // <-- Added this case
//                 return <Payment />;
//               default:
//                 return <HeroSection />;
//             }
//           })()
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
