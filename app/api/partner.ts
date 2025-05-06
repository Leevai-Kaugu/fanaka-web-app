// pages/api/partner.js
export default function handler(req: { method: string; body: { name: any; companyName: any; email: any; phone: any; expectedReturn: any; loanAmount: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { name, email, phone, expectedReturn, loanAmount } = req.body;
  
    if (!name || !email || !phone || !expectedReturn || !loanAmount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    if (typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    if (isNaN(Number(expectedReturn)) || isNaN(Number(loanAmount))) {
      return res.status(400).json({ message: 'Loan amount and expected return must be numbers' });
    }
    
  
    try {
      // Example placeholder for saving to a DB or sending an email
      console.log('Received Partner Application:', {
        name,
        email,
        phone,
        expectedReturn,
        loanAmount,
      });
  
      res.status(200).json({ message: 'Application received' });
    } catch (error) {
      console.error('Error processing application:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  