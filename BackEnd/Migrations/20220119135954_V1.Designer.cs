// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace WEB_Projekat.Migrations
{
    [DbContext(typeof(SvaKazina))]
    [Migration("20220119135954_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Models.Dealer", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Godine")
                        .HasColumnType("int");

                    b.Property<int>("GodineRada")
                        .HasColumnType("int");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<long>("JMBG")
                        .HasColumnType("bigint");

                    b.Property<int?>("KazinoID")
                        .HasColumnType("int");

                    b.Property<int>("PlataEUR")
                        .HasColumnType("int");

                    b.Property<string>("Pol")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("nvarchar(8)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.HasKey("ID");

                    b.HasIndex("KazinoID");

                    b.ToTable("Dealer");
                });

            modelBuilder.Entity("Models.Igra", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("MaximalniBrojIgraca")
                        .HasColumnType("int");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Opis")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Igra");
                });

            modelBuilder.Entity("Models.IgreUKazinu", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IgraID")
                        .HasColumnType("int");

                    b.Property<int?>("KazinoID")
                        .HasColumnType("int");

                    b.Property<int>("MinimalniUlog")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("IgraID");

                    b.HasIndex("KazinoID");

                    b.ToTable("IgreUKazinu");
                });

            modelBuilder.Entity("Models.Kazino", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Drzava")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<int>("GodinaOsnivanja")
                        .HasColumnType("int");

                    b.Property<string>("Grad")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.HasKey("ID");

                    b.ToTable("Kazino");
                });

            modelBuilder.Entity("Models.KazinoOsoba", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("KazinoID")
                        .HasColumnType("int");

                    b.Property<int?>("OsobaID")
                        .HasColumnType("int");

                    b.Property<int>("PotrosenoCipova")
                        .HasColumnType("int");

                    b.Property<int>("TrenutnoCipova")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("KazinoID");

                    b.HasIndex("OsobaID");

                    b.ToTable("KazinoOsoba");
                });

            modelBuilder.Entity("Models.Osoba", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Godine")
                        .HasColumnType("int");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<long>("JMBG")
                        .HasColumnType("bigint");

                    b.Property<string>("Pol")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.HasKey("ID");

                    b.ToTable("Osoba");
                });

            modelBuilder.Entity("Models.PicaUKazinu", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Cena")
                        .HasColumnType("int");

                    b.Property<int?>("KazinoID")
                        .HasColumnType("int");

                    b.Property<int?>("PiceID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("KazinoID");

                    b.HasIndex("PiceID");

                    b.ToTable("PicaUKazinu");
                });

            modelBuilder.Entity("Models.Pice", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Alkoholno")
                        .HasColumnType("bit");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<int>("ProcenatAlkohola")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Pice");
                });

            modelBuilder.Entity("Models.Dealer", b =>
                {
                    b.HasOne("Models.Kazino", "Kazino")
                        .WithMany("Radnici")
                        .HasForeignKey("KazinoID");

                    b.Navigation("Kazino");
                });

            modelBuilder.Entity("Models.IgreUKazinu", b =>
                {
                    b.HasOne("Models.Igra", "Igra")
                        .WithMany("IgraKazino")
                        .HasForeignKey("IgraID");

                    b.HasOne("Models.Kazino", "Kazino")
                        .WithMany("Igre")
                        .HasForeignKey("KazinoID");

                    b.Navigation("Igra");

                    b.Navigation("Kazino");
                });

            modelBuilder.Entity("Models.KazinoOsoba", b =>
                {
                    b.HasOne("Models.Kazino", "Kazino")
                        .WithMany("Osobe")
                        .HasForeignKey("KazinoID");

                    b.HasOne("Models.Osoba", "Osoba")
                        .WithMany("OsobaKazino")
                        .HasForeignKey("OsobaID");

                    b.Navigation("Kazino");

                    b.Navigation("Osoba");
                });

            modelBuilder.Entity("Models.PicaUKazinu", b =>
                {
                    b.HasOne("Models.Kazino", "Kazino")
                        .WithMany("Pica")
                        .HasForeignKey("KazinoID");

                    b.HasOne("Models.Pice", "Pice")
                        .WithMany("PicaKazino")
                        .HasForeignKey("PiceID");

                    b.Navigation("Kazino");

                    b.Navigation("Pice");
                });

            modelBuilder.Entity("Models.Igra", b =>
                {
                    b.Navigation("IgraKazino");
                });

            modelBuilder.Entity("Models.Kazino", b =>
                {
                    b.Navigation("Igre");

                    b.Navigation("Osobe");

                    b.Navigation("Pica");

                    b.Navigation("Radnici");
                });

            modelBuilder.Entity("Models.Osoba", b =>
                {
                    b.Navigation("OsobaKazino");
                });

            modelBuilder.Entity("Models.Pice", b =>
                {
                    b.Navigation("PicaKazino");
                });
#pragma warning restore 612, 618
        }
    }
}
