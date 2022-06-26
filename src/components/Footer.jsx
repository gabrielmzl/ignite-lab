import { LogoFooter } from "./LogoFooter";

export function Footer() {
  return (
    <footer className="mt-20 p-6 border-t border-gray-700 flex justify-between items-center">
      <div className="flex gap-6 items-center text-gray-300">
        <LogoFooter />
        Rocketseat - Todos os direitos reservados
      </div>

      <div className="text-gray-300">
        Políticas de privacidade
      </div>
    </footer>
  )
}