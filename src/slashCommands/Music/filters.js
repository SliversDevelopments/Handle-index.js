const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
  name: "filters",
  description: "Set EqualizerBand",
  options: [
    {
        name: "filter",
        description: "Set EqualizerBand",
        type: "STRING",
        required: true,
        choices: [
            {
                name: "Clear",
                value: "clear"
            },
            {
                name: "Bass",
                value: "bass",
            },
            {
                name: "Party",
                value: "party"
            },
            {
                name: "Radio",
                value: "radio"
            },
            {
                name: "Pop",
                value: "pop"
            }, 
            {
                name: "Treblebass",
                value: "treblebass"
            },
            {
                name: "Bassboost",
                value: "bassboost"
            },
            {
                name: "Soft",
                value: "soft"
            },
            {
                name: "Custom",
                value: "custom"
            }
        ]
    }  
],

  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    });
      if(!interaction.member.voice.channel) return interaction.editReply({embeds: [new MessageEmbed ().setColor(client.embedColor).setDescription("You are not connect in vc")]});
      if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({embeds: [new MessageEmbed ().setColor(client.embedColor).setDescription(`You are not connected to <#${interaction.guild.me.voice.channelId}> to use this command.`)]});
    const filter = interaction.options.getString("filter");

    const player = interaction.client.manager.get(interaction.guildId);
    if (!player.queue.current) {
      const thing = new MessageEmbed()
        .setDescription('there is nothing playing')
        .setColor(client.embedColor)
      return interaction.editReply({ embeds: [thing] });
     }
      const emojiequalizer = client.emoji.filter;

        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
       switch(filter) {   
          case "patry":
            var bands = [
                { band: 0, gain: -1.16 },
                { band: 1, gain: 0.28 },
                { band: 2, gain: 0.42 },
                { band: 3, gain: 0.5 },
                { band: 4, gain: 0.36 },
                { band: 5, gain: 0 },
                { band: 6, gain: -0.3 },
                { band: 7, gain: -0.21 },
                { band: 8, gain: -0.21 } 
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Party mode is ON`);
            break;
            case 'bass':
            var bands = [
                { band: 0, gain: 0.6 },
                { band: 1, gain: 0.7 },
                { band: 2, gain: 0.8 },
                { band: 3, gain: 0.55 },
                { band: 4, gain: 0.25 },
                { band: 5, gain: 0 },
                { band: 6, gain: -0.25 },
                { band: 7, gain: -0.45 },
                { band: 8, gain: -0.55 },
                { band: 9, gain: -0.7 },    
                { band: 10, gain: -0.3 },    
                { band: 11, gain: -0.25 },
                { band: 12, gain: 0 },   
                { band: 13, gain: 0 },
                { band: 14, gain: 0 }    
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Bass mode is ON`);
            break;
           case 'radio':
            var bands = [
                { band: 0, gain: 0.65 },
                { band: 1, gain: 0.45 },
                { band: 2, gain: -0.45 },
                { band: 3, gain: -0.65 },
                { band: 4, gain: -0.35 },
                { band: 5, gain: 0.45 },
                { band: 6, gain: 0.55 },
                { band: 7, gain: 0.6 },
                { band: 8, gain: 0.6 },
                { band: 9, gain: 0.6 },    
                { band: 10, gain: 0 },    
                { band: 11, gain: 0 },
                { band: 12, gain: 0 },   
                { band: 13, gain: 0 },
                { band: 14, gain: 0 }  
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Radio mode is ON`);
            break;
           case 'pop':
            var bands = [
                { band: 0, gain: -0.25 },
                { band: 1, gain: 0.48 },
                { band: 2, gain: 0.59 },
                { band: 3, gain: 0.72 },
                { band: 4, gain: 0.56 },
                { band: 5, gain: 0.15 },
                { band: 6, gain: -0.24 },
                { band: 7, gain: -0.24 },
                { band: 8, gain: -0.16 },
                { band: 9, gain: -0.16 },    
                { band: 10, gain: 0 },    
                { band: 11, gain: 0 },
                { band: 12, gain: 0 },   
                { band: 13, gain: 0 },
                { band: 14, gain: 0 }
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Pop mode is ON`);
            break;
        case 'trablebass':
            var bands = [
                { band: 0, gain: 0.6 },
                { band: 1, gain: 0.67 },
                { band: 2, gain: 0.67 },
                { band: 3, gain: 0 },
                { band: 4, gain: -0.5 },
                { band: 5, gain: 0.15 },
                { band: 6, gain: -0.45 },
                { band: 7, gain: 0.23 },
                { band: 8, gain: 0.35 },
                { band: 9, gain: 0.45 },
                { band: 10, gain: 0.55 },
                { band: 11, gain: 0.6 },
                { band: 12, gain: 0.55 },
                { band: 13, gain: 0 },
                { band: 14, gain: 0 }
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Trablebass mode is ON`);
            break;
          case 'bassboost':
            var bands = new Array(7).fill(null).map((_, i) => (
                { band: i, gain: 0.25 }
            ));
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Bassboost mode is ON`);
            break;
          case 'soft':
            var bands =  [
                { band: 0, gain: 0 },
                { band: 1, gain: 0 },
                { band: 2, gain: 0 },
                { band: 3, gain: 0 },
                { band: 4, gain: 0 },
                { band: 5, gain: 0 },
                { band: 6, gain: 0 },
                { band: 7, gain: 0 },
                { band: 8, gain: -0.25 },
                { band: 9, gain: -0.25 },    
                { band: 10, gain: -0.25 },    
                { band: 11, gain: -0.25 },
                { band: 12, gain: -0.25 },   
                { band: 13, gain: -0.25 },   
                { band: 14, gain: -0.25 } 
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Soft mode is ON`);
            break;
          case'custom':
            var bands = [
                { band: 0, gain: args[1] },
                { band: 1, gain: args[2] },
                { band: 2, gain: args[3] },
                { band: 3, gain: args[4] },
                { band: 4, gain: args[5] },
                { band: 5, gain: args[6] },
                { band: 6, gain: args[7] },
                { band: 7, gain: args[8] },
                { band: 8, gain: args[9] },
                { band: 9, gain: args[10] },    
                { band: 10, gain: args[11] },    
                { band: 11, gain: args[12] },
                { band: 12, gain: args[13] },   
                { band: 13, gain: args[14] }    
            ];
            player.setEQ(...bands);
            thing.setDescription(`${emojiequalizer} Custom Equalizer mode is ON`);
            break;
          case 'clear': 
            player.clearEQ();
            thing.setDescription(`${emojiequalizer} Equalizer mode is OFF`);
            break;
        }
         return interaction.editReply({embeds: [thing]});
    }
};