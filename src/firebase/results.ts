import { 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy
} from 'firebase/firestore';
import { db } from './config';
import { TestResult } from '../types/questions';

export const saveTestResult = async (userId: string, result: TestResult) => {
  try {
    const resultsRef = collection(db, 'results');
    await addDoc(resultsRef, {
      userId,
      ...result,
      date: result.date.toISOString()
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getTestResults = async (userId: string): Promise<TestResult[]> => {
  try {
    const resultsRef = collection(db, 'results');
    const q = query(
      resultsRef,
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      date: new Date(doc.data().date)
    })) as TestResult[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};