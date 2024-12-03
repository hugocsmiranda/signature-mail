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

  const iconStyle = {
    borderStyle: "solid",
    borderWidth: "0px",
    float: "left",
    height: "20px",
    marginLeft: "4px",
    marginRight: "4px",
    width: "20px",
  };

  const tableStyle = {
    verticalAlign: "-webkit-baseline-middle",
    fontSize: "small",
    fontFamily: "Arial",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "rgb(21, 41, 72)",
  };

  return (
    <div className="w-2/5 rounded-md flex flex flex-col">
      {data ? (
        <>
          <div className="flex flex-auto items-center">
            {/* START NEW */}

            <table
              ref={tableRef}
              align="left"
              border={0}
              cellPadding="0"
              cellSpacing="0"
              style={{ tableStyle }}
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="Suny logo"
                      src="https://i.ibb.co/XVLs5zF/suny-v3.gif"
                      style={{
                        borderStyle: "solid",
                        borderWidth: "0px",
                        height: "150px",
                        width: "150px",
                      }}
                    />
                  </td>
                  <td>&nbsp;</td>
                  <td>
                    <table
                      align="left"
                      border={0}
                      cellPadding="1"
                      cellSpacing="4"
                      style={{ tableStyle }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            <strong>{data.name}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <em>{data.job}</em>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table
                              align="left"
                              border={0}
                              cellPadding="2"
                              cellSpacing="2"
                              style={{ tableStyle }}
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <img
                                      alt="Phone icon"
                                      src="https://i.ibb.co/kQQtHz3/phone.png"
                                      style={{ iconStyle }}
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href={"tel:" + data.phoneNumber}
                                      style={{ linkStyle }}
                                    >
                                      <small>{data.phoneNumber}</small>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img
                                      alt="Email icon"
                                      src="https://i.ibb.co/r48SNmt/mail.png"
                                      style={{ iconStyle }}
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href={"mailto:" + data.email}
                                      style={{ linkStyle }}
                                    >
                                      <small>{data.email}</small>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img
                                      alt="address icon"
                                      src="https://i.ibb.co/16RDmSn/address.png"
                                      style={{ iconStyle }}
                                    />
                                  </td>
                                  <td>
                                    <small style={{ linkStyle }}>
                                      {data.address}
                                    </small>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img
                                      alt="url icon"
                                      src="https://i.ibb.co/KVT9SXr/site.png"
                                      style={{ iconStyle }}
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href={data.url}
                                      target="_blank"
                                      style={{ linkStyle }}
                                    >
                                      <small> {data.url}</small>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
