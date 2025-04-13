import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // In a real application, this would send an email or store the message
      // For now, just return success
      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while sending your message' 
      });
    }
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
