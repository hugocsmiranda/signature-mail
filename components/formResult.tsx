import { useRef } from "react";
import { Button } from "../components/ui/button";
import { Toaster } from "./ui/toaster";
import { useToast } from "../hooks/use-toast";
import { z } from "zod";
import { formSchema } from "@/components/profileFormSchema";

type FormResultProps = {
  data: z.infer<typeof formSchema> | null;
};

export function FormResult({ data }: FormResultProps) {
  const tableRef = useRef<HTMLTableElement>(null);
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (tableRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(tableRef.current); // Sélectionne le contenu de la table
      selection?.removeAllRanges(); // Supprime les sélections existantes
      selection?.addRange(range); // Ajoute la nouvelle sélection

      try {
        document.execCommand("copy"); // Copie le contenu sélectionné dans le presse-papiers
        toast({
          variant: "success",
          title: "Copié avec success",
          description: "Signature copiée dans le presse-papiers !",
        });
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Copié avec success",
          description: "Échec de la copie dans le presse-papiers !",
          duration: 100,
        });
        console.error("Échec de la copie dans le presse-papiers", err);
      }

      // Supprimer la sélection après la copie
      selection?.removeAllRanges();
    }
  };

  return (
    <div className="w-1/2 p-4 rounded-md flex flex flex-col">
      {data ? (
        <>
          <div className="flex flex-auto items-center">
            {/* START NEW */}

            <table
              ref={tableRef}
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{
                verticalAlign: "-webkit-baseline-middle",
                fontSize: "small",
                fontFamily: "Arial",
              }}
            >
              <tbody>
                <tr>
                  <td rowSpan={7} style={{ verticalAlign: "top" }}>
                    <img
                      alt="SUNY Logo"
                      src="https://i.ibb.co/XVLs5zF/suny-v3.gif"
                      style={{
                        width: "150px",
                        height: "150px",
                        maxWidth: "150px",
                      }}
                    />
                  </td>
                  <td
                    rowSpan={7}
                    style={{ width: "16px", borderRight: "1px solid #152948" }}
                  >
                    &nbsp;
                  </td>
                  <td rowSpan={7} style={{ width: "16px" }}>
                    &nbsp;
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      height: "24px",
                      fontFamily: "sans-serif",
                      verticalAlign: "middle",
                    }}
                  >
                    <h5 color="#152948">
                      <strong
                        style={{
                          margin: "0px",
                          fontSize: "14px",
                          color: "rgb(21, 41, 72)",
                        }}
                      >
                        {data.name}
                      </strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ height: "24px", fontFamily: "sans-serif" }}
                  >
                    <em
                      color="#152948"
                      style={{
                        margin: "0px",
                        color: "rgb(21, 41, 72)",
                        fontSize: "12px",
                      }}
                    >
                      {data.job}
                    </em>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ marginLeft: "16px", height: "24px" }}
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "32px", height: "24px" }}>
                    <img
                      alt="phone icon"
                      src="https://i.ibb.co/kQQtHz3/phone.png"
                      style={{
                        width: "20px",
                        height: "20px",
                        maxWidth: "20px",
                      }}
                    />
                  </td>
                  <td>
                    <a
                      href={"tel:" + data.phoneNumber}
                      color="#152948"
                      style={{
                        textDecoration: "none !important",
                        color: "rgb(21, 41, 72) !important",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <small
                        style={{
                          textDecoration: "none !important",
                          color: "rgb(21, 41, 72) !important",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {data.phoneNumber}
                      </small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "32px", height: "24px" }}>
                    <img
                      alt="mail icon"
                      src="https://i.ibb.co/r48SNmt/mail.png"
                    />
                  </td>
                  <td>
                    <a
                      href={"mailto:" + data.email}
                      color="#152948"
                      style={{
                        textDecoration: "none !important",
                        color: "rgb(21, 41, 72) !important",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <small
                        style={{
                          textDecoration: "none !important",
                          color: "rgb(21, 41, 72) !important",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {data.email}
                      </small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "32px", height: "24px" }}>
                    <img
                      alt="address icon"
                      src="https://i.ibb.co/16RDmSn/address.png"
                    />
                  </td>
                  <td>
                    <small
                      color="#152948"
                      style={{
                        textDecoration: "none !important",
                        color: "rgb(21, 41, 72) !important",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {data.address}
                    </small>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "32px", height: "24px" }}>
                    <img
                      alt="site icon"
                      src="https://i.ibb.co/KVT9SXr/site.png"
                    />
                  </td>
                  <td>
                    <a
                      href={data.url}
                      color="#152948"
                      style={{
                        textDecoration: "none !important",
                        color: "rgb(21, 41, 72) !important",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <small
                        style={{
                          textDecoration: "none !important",
                          color: "rgb(21, 41, 72) !important",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {data.url}
                      </small>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* END NEW */}
          </div>
          <div>
            <Button onClick={copyToClipboard}>
              Copier dans le Presse-papiers
            </Button>
          </div>
          <Toaster />
        </>
      ) : (
        <p className="mt-4 text-gray-500">Aucune donnée soumise.</p>
      )}
    </div>
  );
}
