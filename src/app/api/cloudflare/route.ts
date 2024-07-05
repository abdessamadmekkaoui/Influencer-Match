import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();

  try {
    const response = await axios.post(
      'https://api.cloudflare.com/client/v4/accounts/aa9c93f0ff5da962f353b059a7c7bd45/ai/run/@cf/microsoft/resnet-50',
      buffer,
      {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Authorization': `Bearer h8BSYIuQ92sg0o24Mzb2k0bxX3MdeuK2KCTfQaOd`,
        },
      }
    );

    return NextResponse.json(response.data.result);
  } catch (error) {
    console.error('Error calling Cloudflare API:', error);
    return NextResponse.json({ error: 'Error analyzing image' }, { status: 500 });
  }
}