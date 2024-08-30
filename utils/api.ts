const createURL = (path: string) => {
    return window.location.origin + path;
  };

export async function sendContactForm(data: { name: string; email: string; message: string }) {
    try {
      const response = await fetch(createURL('/api/contactus'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  }