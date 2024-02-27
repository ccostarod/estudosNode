CREATE TABLE usuarios (
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
); // Criação de tabela

DESCRIBE usuarios; // Descreve a tabela (Estrutura de dados)

INSERT INTO usuarios (nome, email, idade)
VALUES ('Rodrigo Costa', 'rodrigo@example.com', 19); // Inserção de dados


SELECT FROM * usuarios; // Seleciona todos os usuários (Consulta de dados)
SELECT FROM * usuarios WHERE idade > 18; // Seleciona todos os usuários com idade maior que 18 (Consulta de dados)

DELETE FROM usuarios WHERE nome = 'Rodrigo Costa'; // Deleta o usuário (Remoção de dados)

UPDATE usuarios SET idade = 20 WHERE nome = 'Rodrigo Costa'; // Atualiza a idade do usuário (Atualização de dados)


