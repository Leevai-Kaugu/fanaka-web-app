// pages/api/partner.js
export default function handler(req: { method: string; body: { name: any; companyName: any; email: any; phone: any; expectedReturn: any; loanAmount: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { name, companyName, email, phone, expectedReturn, loanAmount } = req.body;
  
    if (!name || !companyName || !email || !phone || !expectedReturn || !loanAmount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      // Example placeholder for saving to a DB or sending an email
      console.log('Received Partner Application:', {
        name,
        companyName,
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
  