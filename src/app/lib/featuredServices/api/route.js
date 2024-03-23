import {mongodb} from '../../../../../lib/mongodb';
import { NextResponse } from 'next/server';
import Service from '../../../../../models/service';



export async function GET() {
  
    try {

      await mongodb();

      const featuredServices = await Service.find({ isFeatured: true });

      return NextResponse.json(featuredServices);
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
}
