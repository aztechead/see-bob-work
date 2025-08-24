import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export async function POST(request: NextRequest) {
  try {
    const { markdownContent } = await request.json();
    
    if (!markdownContent) {
      return NextResponse.json({ error: 'No markdown content provided' }, { status: 400 });
    }

    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);
    
    // Create HTML document with proper styling
    const htmlDocument = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Bob - Resume</title>
          <style>
            @page {
              size: A4;
              margin: 20mm;
            }
            
            body {
              font-family: 'Arial', sans-serif;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            
            h1 {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 20px;
              color: #1e293b;
              border-bottom: 2px solid #3b82f6;
              padding-bottom: 10px;
              page-break-after: avoid;
            }
            
            h2 {
              font-size: 20px;
              font-weight: bold;
              margin-top: 25px;
              margin-bottom: 15px;
              color: #334155;
              page-break-after: avoid;
            }
            
            h3 {
              font-size: 16px;
              font-weight: bold;
              margin-top: 20px;
              margin-bottom: 10px;
              color: #475569;
              page-break-after: avoid;
            }
            
            h4 {
              font-size: 14px;
              font-weight: bold;
              margin-top: 15px;
              margin-bottom: 8px;
              color: #64748b;
              page-break-after: avoid;
            }
            
            p {
              margin-bottom: 10px;
              text-align: justify;
              page-break-inside: avoid;
            }
            
            ul {
              margin-bottom: 15px;
              padding-left: 20px;
              page-break-inside: avoid;
            }
            
            li {
              margin-bottom: 5px;
              page-break-inside: avoid;
            }
            
            strong {
              font-weight: bold;
              color: #1e293b;
            }
            
            a {
              color: #3b82f6;
              text-decoration: none;
            }
            
            hr {
              border: none;
              border-top: 1px solid #e2e8f0;
              margin: 20px 0;
              page-break-after: avoid;
            }
            
            .contact-info {
              background-color: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 20px;
              border-left: 4px solid #3b82f6;
              page-break-inside: avoid;
            }
            
            .experience-section {
              margin-bottom: 25px;
              page-break-inside: avoid;
            }
            
            .company-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 10px;
            }
            
            .company-name {
              font-weight: bold;
              color: #3b82f6;
            }
            
            .period {
              color: #64748b;
              font-style: italic;
            }
            
            .achievements {
              margin-top: 10px;
              page-break-inside: avoid;
            }
            
            .technologies {
              margin-top: 10px;
              font-style: italic;
              color: #64748b;
              page-break-inside: avoid;
            }
            
            .impact {
              margin-top: 10px;
              font-weight: bold;
              color: #059669;
              page-break-inside: avoid;
            }
            
            .skills-section {
              margin-top: 20px;
              page-break-inside: avoid;
            }
            
            .skill-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8px;
              page-break-inside: avoid;
            }
            
            .skill-name {
              font-weight: bold;
            }
            
            .skill-level {
              color: #64748b;
            }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;

    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Set content and wait for rendering
    await page.setContent(htmlDocument, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      }
    });

    await browser.close();

    // Return PDF as response
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="bob-resume.pdf"'
      }
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
