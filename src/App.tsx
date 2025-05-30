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
// // import PaymentPage from './components/sections/PaymentPage';
// import ContactPage from './components/sections/ContactPage';
// import PrivacyPolicyPage from './components/sections/PrivacyPolicyPage';
// import TermsPage from './components/sections/TermsPage';
// import { TestResult } from './types/questions';
// import { Branch } from './types/branch';
// import { onAuthChange } from './firebase/auth';
// import { saveTestResult, getTestResults } from './firebase/results';
// import { User } from 'firebase/auth';

// function App() {
//   const [currentSection, setCurrentSection] = useState('signin');
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
//   const [isPaid, setIsPaid] = useState<boolean>(() => {
//     return localStorage.getItem('isPaid') === 'true';
//   });

//   useEffect(() => {
//     const unsubscribe = onAuthChange((authUser) => {
//       setUser(authUser);
//       setLoading(false);

//       if (!authUser) {
//         setCurrentSection('signin');
//       } else {
//         setCurrentSection('branch-selection');
//       }
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
//     setCurrentSection('signin');
//     setTestResults([]);
//     setIsPaid(false);
//     localStorage.removeItem('isPaid');
//   };

//   const handlePayNow = () => {
//     setCurrentSection('payment');
//   };

//   const handlePaymentSuccess = () => {
//     setIsPaid(true);
//     localStorage.setItem('isPaid', 'true');
//     alert('Payment successful! Tests are now unlocked.');
//     setCurrentSection('tests');
//   };

//   const handlePaymentCancel = () => {
//     setCurrentSection('tests');
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   // 🚨 DO NOT render anything else if user is not signed in
//   if (!user) {
//     return showSignUp ? (
//       <SignUpPage
//         onSignUp={handleSignUp}
//         onSwitchToSignIn={() => setShowSignUp(false)}
//       />
//     ) : (
//       <SignInPage
//         onSignIn={handleSignIn}
//         onSwitchToSignUp={() => setShowSignUp(true)}
//       />
//     );
//   }

//   // 🚨 If user is logged in but branch is not selected, show branch selection
//   if (!selectedBranch && currentSection === 'branch-selection') {
//     return <BranchSelection onSelectBranch={handleBranchSelect} />;
//   }

//   const renderSection = () => {
//     if (activeTest) {
//       return (
//         <TestInterface
//           subject={activeTest.subject}
//           duration={activeTest.duration}
//           totalQuestions={activeTest.questions}
//           branch={selectedBranch!}
//           onClose={() => setActiveTest(null)}
//           onComplete={handleTestComplete}
//         />
//       );
//     }

//     switch (currentSection) {
//       case 'home':
//         return <HeroSection />;
//       case 'tests':
//         return (
//           <TestsSection
//             selectedBranch={selectedBranch!}
//             paid={isPaid}
//             setPaid={setIsPaid}
//           />
//         );
//       case 'contact':
//         return <ContactPage onBack={() => setCurrentSection('home')} />;
//       case 'privacy':
//         return <PrivacyPolicyPage onBack={() => setCurrentSection('home')} />;
//       case 'terms':
//         return <TermsPage onBack={() => setCurrentSection('home')} />;
//       case 'results':
//         return <ResultsSection results={testResults} />;
//       case 'achievements':
//         return <AchievementsSection />;
//       case 'profile':
//         return <ProfileSection />;
//       case 'about':
//         return <AboutSection />;
//       default:
//         return <HeroSection />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar
//         onNavigate={setCurrentSection}
//         currentSection={currentSection}
//         onSignOut={handleSignOut}
//         selectedBranch={selectedBranch}
//         onChangeBranch={() => setCurrentSection('branch-selection')}
//       />
//       <main>{renderSection()}</main>
//       <Footer onNavigate={setCurrentSection} />
//     </div>
//   );
// }

// export default App;

// // rzp_test_FbFlQpmq9VPC9s
// // 9rif5trbkEIw88VnhDEVbUqT

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
import ContactPage from './components/sections/ContactPage';
import PrivacyPolicyPage from './components/sections/PrivacyPolicyPage';
import TermsPage from './components/sections/TermsPage';
import { TestResult } from './types/questions';
import { Branch } from './types/branch';
import { onAuthChange } from './firebase/auth';
import { saveTestResult, getTestResults } from './firebase/results';
import { User } from 'firebase/auth';
import CancellationPolicyPage from './components/sections/CancellationPolicyPage';

function App() {
  const [currentSection, setCurrentSection] = useState('signin');
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

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthChange((authUser) => {
      setUser(authUser);
      setLoading(false);

      if (!authUser) {
        setCurrentSection('signin');
      } else {
        setCurrentSection('branch-selection');
      }
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

  const handleStartTest = (test: {
    subject: string;
    duration: string;
    questions: number;
  }) => {
    setActiveTest(test);
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
    setCurrentSection('signin');
    setTestResults([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return showSignUp ? (
      <SignUpPage
        onSignUp={handleSignUp}
        onSwitchToSignIn={() => setShowSignUp(false)}
      />
    ) : (
      <SignInPage
        onSignIn={handleSignIn}
        onSwitchToSignUp={() => setShowSignUp(true)}
      />
    );
  }

  if (!selectedBranch && currentSection === 'branch-selection') {
    return <BranchSelection onSelectBranch={handleBranchSelect} />;
  }

  if (location.pathname === '/contact') {
    return <ContactPage />;
  }

  if (location.pathname === '/privacy') {
    return <PrivacyPolicyPage />;
  }

  if (location.pathname === '/terms') {
    return <TermsPage />;
  }

  if (location.pathname === '/cancellation-policy') {
    return <CancellationPolicyPage />;
  }

  const renderSection = () => {
    if (activeTest) {
      return (
        <TestInterface
          subject={activeTest.subject}
          duration={activeTest.duration}
          totalQuestions={activeTest.questions}
          branch={selectedBranch!}
          onClose={() => setActiveTest(null)}
          onComplete={handleTestComplete}
        />
      );
    }

    switch (currentSection) {
      case 'home':
        return <HeroSection onExplore={() => setCurrentSection('tests')} />;
      case 'tests':
        return (
          <TestsSection
            selectedBranch={selectedBranch!}
            onStartTest={handleStartTest}
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
      default:
        return <HeroSection onExplore={() => setCurrentSection('tests')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onNavigate={setCurrentSection}
        currentSection={currentSection}
        onSignOut={handleSignOut}
        selectedBranch={selectedBranch}
        onChangeBranch={() => setCurrentSection('branch-selection')}
      />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
