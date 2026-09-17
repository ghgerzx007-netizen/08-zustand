import NoteForm from "@/components/NoteForm/NoteForm"
import css from "./CreateNote.module.css"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Note | NoteHub",
  description: "Create a new note in NoteHub and continue from your saved draft.",
};
export default function CreateNotePage() {
    return <>
    <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   <NoteForm />
  </div>
</main>
</>
}

    
