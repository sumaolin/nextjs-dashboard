'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  console.log(formData, 'formData');

  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  // Test it out:
  // console.log(typeof CreateInvoice.amount);
  // console.log('CreateInvoice parse data: ', CreateInvoice);

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  console.log('time date: ', date);
  console.time();
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  console.timeEnd();
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
