import { TodoSchema } from "./models/Todo.js";

describe('Création todo', () => {
    test('valide tous les champs requis', () => {
        expect(TodoSchema).toHaveProperty(test, completed, createdAt);
    });
    test('text obligatoire et ne peut être vide', () => {
        expect(completed).toBe(false);
    });
    test('champ est automatiquement défini date actuelle lors de la creation', () =>{
        expect(createdAt).toBeInstanceOf(Date.now)
    });
});
const TodoSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });