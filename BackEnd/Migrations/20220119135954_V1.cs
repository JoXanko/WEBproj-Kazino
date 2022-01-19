using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB_Projekat.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Igra",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    MaximalniBrojIgraca = table.Column<int>(type: "int", nullable: false),
                    Opis = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Igra", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Kazino",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Drzava = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Grad = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    GodinaOsnivanja = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kazino", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Osoba",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JMBG = table.Column<long>(type: "bigint", nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Pol = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Godine = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Osoba", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pice",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    Alkoholno = table.Column<bool>(type: "bit", nullable: false),
                    ProcenatAlkohola = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pice", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Dealer",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JMBG = table.Column<long>(type: "bigint", nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Pol = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Godine = table.Column<int>(type: "int", nullable: false),
                    GodineRada = table.Column<int>(type: "int", nullable: false),
                    PlataEUR = table.Column<int>(type: "int", nullable: false),
                    KazinoID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dealer", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Dealer_Kazino_KazinoID",
                        column: x => x.KazinoID,
                        principalTable: "Kazino",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "IgreUKazinu",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MinimalniUlog = table.Column<int>(type: "int", nullable: false),
                    KazinoID = table.Column<int>(type: "int", nullable: true),
                    IgraID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IgreUKazinu", x => x.ID);
                    table.ForeignKey(
                        name: "FK_IgreUKazinu_Igra_IgraID",
                        column: x => x.IgraID,
                        principalTable: "Igra",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_IgreUKazinu_Kazino_KazinoID",
                        column: x => x.KazinoID,
                        principalTable: "Kazino",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "KazinoOsoba",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TrenutnoCipova = table.Column<int>(type: "int", nullable: false),
                    PotrosenoCipova = table.Column<int>(type: "int", nullable: false),
                    OsobaID = table.Column<int>(type: "int", nullable: true),
                    KazinoID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KazinoOsoba", x => x.ID);
                    table.ForeignKey(
                        name: "FK_KazinoOsoba_Kazino_KazinoID",
                        column: x => x.KazinoID,
                        principalTable: "Kazino",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KazinoOsoba_Osoba_OsobaID",
                        column: x => x.OsobaID,
                        principalTable: "Osoba",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PicaUKazinu",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Cena = table.Column<int>(type: "int", nullable: false),
                    KazinoID = table.Column<int>(type: "int", nullable: true),
                    PiceID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PicaUKazinu", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PicaUKazinu_Kazino_KazinoID",
                        column: x => x.KazinoID,
                        principalTable: "Kazino",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PicaUKazinu_Pice_PiceID",
                        column: x => x.PiceID,
                        principalTable: "Pice",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Dealer_KazinoID",
                table: "Dealer",
                column: "KazinoID");

            migrationBuilder.CreateIndex(
                name: "IX_IgreUKazinu_IgraID",
                table: "IgreUKazinu",
                column: "IgraID");

            migrationBuilder.CreateIndex(
                name: "IX_IgreUKazinu_KazinoID",
                table: "IgreUKazinu",
                column: "KazinoID");

            migrationBuilder.CreateIndex(
                name: "IX_KazinoOsoba_KazinoID",
                table: "KazinoOsoba",
                column: "KazinoID");

            migrationBuilder.CreateIndex(
                name: "IX_KazinoOsoba_OsobaID",
                table: "KazinoOsoba",
                column: "OsobaID");

            migrationBuilder.CreateIndex(
                name: "IX_PicaUKazinu_KazinoID",
                table: "PicaUKazinu",
                column: "KazinoID");

            migrationBuilder.CreateIndex(
                name: "IX_PicaUKazinu_PiceID",
                table: "PicaUKazinu",
                column: "PiceID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dealer");

            migrationBuilder.DropTable(
                name: "IgreUKazinu");

            migrationBuilder.DropTable(
                name: "KazinoOsoba");

            migrationBuilder.DropTable(
                name: "PicaUKazinu");

            migrationBuilder.DropTable(
                name: "Igra");

            migrationBuilder.DropTable(
                name: "Osoba");

            migrationBuilder.DropTable(
                name: "Kazino");

            migrationBuilder.DropTable(
                name: "Pice");
        }
    }
}
