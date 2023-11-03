import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const jogoData: Prisma.JogoCreateInput[] = [
    {
        "jogo": "Hogwarts Legacy: Edição Digital Deluxe",
        "genero": "rpg,mundo aberto",
        "distribuidora": "Warner Bros Interactive",
        "plataforma": "ps4,ps5",
        "preco": 250,
        "imagem": "HogwartsLegacy.jpg"
    },
    {
        "jogo": "Call of Dut cross gen",
        "genero": "tiro",
        "distribuidora": "Activision",
        "plataforma": "ps4,ps5",
        "preco": 165,
        "imagem": "CallofDutcrossgen.jpg"
    },
    {
        "jogo": "The Last of Us part I",
        "genero": "acao,aventura",
        "distribuidora": "Sony Interactive Entertainment",
        "plataforma": "ps5",
        "preco": 250,
        "imagem": "TheLastOfUspartI.jpg"
    },
    {
        "jogo": "STAR WARS Jedi: Survivor™ Edição Deluxe",
        "genero": "acao,aventura",
        "distribuidora": "Electronic Arts Inc",
        "plataforma": "ps5",
        "preco": 315,
        "imagem": "STARWARSJediSurvivorEdiçãoDeluxe.jpg"
    },
    {
        "jogo": "The Last Of Us™ Remastered",
        "genero": "acao,aventura",
        "distribuidora": "Sony Interactive Entertainment",
        "plataforma": "ps4,ps5",
        "preco": 50,
        "imagem": "TheLastOfUsRemastered.jpg"
    },
    {
        "jogo": "The Last of Us Part II Digital Deluxe Edition",
        "genero": "acao,aventura",
        "distribuidora": "Sony Interactive Entertainment",
        "plataforma": "ps4",
        "preco": 150,
        "imagem": "TheLastOfUsPartIIDigitalDeluxeEdition.jpg"
    },
    {
        "jogo": "Resident Evil 4 PS4 e PS5",
        "genero": "sobrevivencia,horror",
        "distribuidora": "Capcom U.S.A., Inc.",
        "plataforma": "ps4,ps5",
        "preco": 170,
        "imagem": "ResidentEvil4PS4ePS5.jpg"
    },
    {
        "jogo": "The Witcher 3: Wild Hunt",
        "genero": "aventura,mundo aberto",
        "distribuidora": "CD PROJEKT SA",
        "plataforma": "ps4,ps5",
        "preco": 66,
        "imagem": "TheWitcher3WildHunt.jpg"
    },
    {
        "jogo": "Sekiro™: Shadows Die Twice - Edição Jogo do Ano",
        "genero": "acao,aventura",
        "distribuidora": "Activision",
        "plataforma": "ps4",
        "preco": 137,
        "imagem": "SekiroShadowsDieTwiceEdiçãoJogodoAno.webp"
    },
    {
        "jogo": "Injustice™2 - Edição Lendária",
        "genero": "luta",
        "distribuidora": "Warner Bros. Games",
        "plataforma": "xbox",
        "preco": 199,
        "imagem": "Injustice2EdiçãoLendária.jpg"
    },
    {
        "jogo": "Red Dead Redemption 2",
        "genero": "acao,aventura",
        "distribuidora": "Rockstar Games",
        "plataforma": "xbox",
        "preco": 82,
        "imagem": "RedDeadRedemption2.jpg"
    },
    {
        "jogo": "Tomb Raider: Definitive Edition",
        "genero": "acao,aventura",
        "distribuidora": "Crystal Dynamics",
        "plataforma": "xbox",
        "preco": 82,
        "imagem": "TombRaiderDefinitiveEdition.jpg"
    },
    {
        "jogo": "Grand Theft Auto V (Xbox One e Xbox Series X|S)",
        "genero": "mundo aberto",
        "distribuidora": "Rockstar Games",
        "plataforma": "xbox",
        "preco": 99,
        "imagem": "GrandTheftAutoVXboxOneeXboxSeriesXS.jpg"
    },
    {
        "jogo": "EA SPORTS™ FIFA 23 Edição Standard para Xbox One",
        "genero": "esporte",
        "distribuidora": "Electronic Arts Inc",
        "plataforma": "xbox",
        "preco": 299,
        "imagem": "EASPORTSFIFA23EdiçãoStandardparaXboxOne.webp"
    },
    {
        "jogo": "DRAGON BALL XENOVERSE 2",
        "genero": "luta",
        "distribuidora": "BANDAI NAMCO Entertainment",
        "plataforma": "xbox",
        "preco": 250,
        "imagem": "DRAGONBALLXENOVERSE2.jpg"
    },
    {
        "jogo": "Batman: Arkham Collection",
        "genero": "acao,aventura",
        "distribuidora": "Warner Bros. Games",
        "plataforma": "xbox",
        "preco": 250,
        "imagem": "BatmanArkhamCollection.jpg"
    },
    {
        "jogo": "Halo Infinite (Campanha)",
        "genero": "tiro",
        "distribuidora": "Xbox Game Studios",
        "plataforma": "xbox",
        "preco": 250,
        "imagem": "HaloInfiniteCampanha.jpg"
    }
];

async function main() {
    console.log(`Start seeding ...`);
    for (const p of jogoData) {
        const jogo = await prisma.jogo.create({
            data: p,
        });
        console.log(`Created Jogo with id: ${jogo.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

