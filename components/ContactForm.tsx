'use client';
import { useFormState } from 'react-dom';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, { success: false });

  return (
    <form action={action} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      {state.message && <p className={state.success ? 'text-green-600' : 'text-red-600'}>{state.message}</p>}
      {['name', 'email', 'phone', 'vehicle', 'date', 'message'].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium">{field.toUpperCase()}</label>
          <input name={field} className="w-full border p-2 rounded" />
          {state.errors?.[field as keyof typeof state.errors] && <span className="text-red-500 text-xs">{state.errors[field as keyof typeof state.errors]}</span>}
        </div>
      ))}
      <select name="fuel" className="w-full border p-2 rounded">
        {['Essence', 'Diesel', 'Hybrid', 'Electrique'].map(f => <option key={f} value={f}>{f}</option>)}
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Envoyer</button>
    </form>
  );
}